# Next.js Starter with Drizzle MySQL & Authentication

A pre-configured Next.js starter with Drizzle ORM (MySQL), user authentication, and secure password handling.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **Drizzle ORM** with MySQL
- ✅ **User Authentication** (Signup/Signin)
- ✅ **Password Hashing** with PBKDF2
- ✅ **JWT Sessions** with secure cookies
- ✅ **Form Validation** with Zod
- ✅ **TypeScript** support
- ✅ **Tailwind CSS** styling

## Quick Start

1. **Clone and install**

   ```bash
   git clone <your-repo>
   cd superm
   npm install
   ```

2. **Set up environment variables**

   ```bash
   # Create .env.local
   SESSION_SECRET=your-super-secret-jwt-key
   DATABASE_URL="mysql://user:password@localhost:port/database_name"
   ```

3. **Create database**

   ```sql
   CREATE DATABASE `database_name`;
   ```

4. **Run the app**
   ```bash
   npm run dev
   ```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   │   ├── signin/        # Sign in page
│   │   └── signup/        # Sign up page
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── login-form.tsx     # Sign in form
│   ├── signup-form.tsx    # Sign up form
│   └── ui/               # UI components
├── db/                   # Database
│   ├── index.ts          # Drizzle connection
│   └── schema.ts         # Database schema
├── lib/                  # Utilities
│   ├── action.ts         # Server actions
│   ├── session.ts        # JWT session management
│   ├── utils.ts          # Password hashing
│   └── definitions.ts    # Zod schemas
```

## Security Features

- **Password Hashing**: PBKDF2 with salt
- **JWT Sessions**: Secure HTTP-only cookies
- **Form Validation**: Zod schema validation
- **SQL Injection Protection**: Drizzle ORM

## Next Steps

1. Add your business logic
2. Customize the UI components
3. Add more database tables
4. Implement role-based access
5. Add API routes if needed

---

Ready to build your next app! 🚀
