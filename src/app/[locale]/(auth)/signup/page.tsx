import Link from "next/link";

import ProviderFormList from "@/components/auth/ProviderFormList";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>

        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>

              <Input id="first-name" placeholder="Elon" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>

              <Input id="last-name" placeholder="Musk" required />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>

            <Input
              autoComplete="email"
              id="email"
              placeholder="elon@musk.com"
              required
              type="email"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>

            <Input
              autoComplete="new-password"
              id="password"
              placeholder="*******"
              type="password"
            />
          </div>

          <Button className="w-full" type="submit">
            Create an account
          </Button>

          <ProviderFormList page="signup" />
        </div>

        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}

          <Link className="underline" href="/signin">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
