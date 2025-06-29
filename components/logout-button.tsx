"use client";

import { LogOut } from "lucide-react";
import { logout } from "@/lib/action";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  return (
    <form action={logout}>
      <Button variant="secondary">
        <LogOut className="size-4" />
        <span>Logout</span>
      </Button>
    </form>
  );
}
