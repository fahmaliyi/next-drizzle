"use client";

import { AlertCircle, GalleryVerticalEnd, Loader2 } from "lucide-react";
import { useActionState } from "react";

import { cn } from "@/lib/utils";
import { signup } from "@/lib/action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form action={action}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Create your account</h1>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <a href="signin" className="underline underline-offset-4">
                Login
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            {state?.errors?.name && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="size-4" />
                <span>{state.errors.name}</span>
              </div>
            )}

            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            {state?.errors?.email && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="size-4" />
                <span>{state.errors.email}</span>
              </div>
            )}

            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            {state?.errors?.password && (
              <Alert variant="destructive" className="py-2">
                <AlertCircle className="size-4" />
                <AlertDescription className="text-sm">
                  <div className="font-medium mb-1">Password must:</div>
                  <ul className="space-y-1">
                    {state.errors.password.map((error) => (
                      <li key={error} className="flex items-center gap-1">
                        <span className="size-1 bg-current rounded-full" />
                        {error}
                      </li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full">
              {pending ? <Loader2 /> : " Create Account"}
            </Button>
          </div>
        </div>
      </form>

      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="bg-background text-muted-foreground relative z-10 px-2">
          Or
        </span>
      </div>

      <Button variant="outline" type="button" className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            fill="currentColor"
          />
        </svg>
        Sign up with GitHub
      </Button>

      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
