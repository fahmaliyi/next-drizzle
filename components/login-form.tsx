"use client";

import { GalleryVerticalEnd, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { signin } from "@/lib/action";

export function SigninForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, action, pending] = useActionState(signin, undefined);

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
            <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            {state?.errors?.email && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <span>{state.errors.email}</span>
              </div>
            )}

            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            {state?.errors?.password && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <span>{state.errors.password}</span>
              </div>
            )}

            <Button type="submit" className="w-full">
              {pending ? <Loader2 className="size-4 animate-spin" /> : "Login"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
