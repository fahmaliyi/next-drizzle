"use server";

import { db } from "@/db";
import { eq } from "drizzle-orm";
import { usersTable } from "@/db/schema";
import { redirect } from "next/navigation";
import { hashPassword, comparePassword } from "@/lib/utils";
import { createSession, deleteSession } from "@/lib/session";
import {
  FormState,
  SignupFormSchema,
  SigninFormSchema,
} from "@/lib/definitions";

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  const existingUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (existingUser.length > 0) {
    return {
      errors: {
        email: ["A user with this email already exists."],
      },
    };
  }

  const hashedPassword = hashPassword(password);

  // Insert new user into database
  await db.insert(usersTable).values({
    name,
    email,
    password: hashedPassword,
  });

  // Get the inserted user ID
  const insertedUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));
  const newUser = insertedUser[0];

  await createSession(newUser.id.toString());
  redirect("/dashboard");
}

export async function signin(state: FormState, formData: FormData) {
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  // Find user by email
  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (users.length === 0) {
    return {
      errors: {
        email: ["Invalid email or password."],
      },
    };
  }

  const user = users[0];

  // Verify password
  const isPasswordValid = comparePassword(password, user.password);
  if (!isPasswordValid) {
    return {
      errors: {
        password: ["Invalid email or password."],
      },
    };
  }

  // Create session and redirect
  await createSession(user.id.toString());
  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();
  redirect("/signin");
}
