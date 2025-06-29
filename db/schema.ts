import { mysqlTable, serial, varchar, timestamp } from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable("users", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});
