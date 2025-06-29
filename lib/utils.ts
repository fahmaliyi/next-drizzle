import crypto from "crypto";

import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha256")
    .toString("hex");
  return `${salt}:${hash}`;
}

export function comparePassword(
  password: string,
  hashedPassword: string
): boolean {
  const [salt, storedHash] = hashedPassword.split(":");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha256")
    .toString("hex");
  return hash === storedHash;
}
