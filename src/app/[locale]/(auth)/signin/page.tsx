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

const SIGNIN_ERROR_URL = "/error";

// * Link : https://authjs.dev/guides/pages/signin
export default async function SignInPage() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>

        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>

              <Link
                className="ml-auto inline-block text-sm underline"
                href="/forgot-password"
              >
                Forgot your password?
              </Link>
            </div>

            <Input id="password" required type="password" />
          </div>

          <Button className="w-full" type="submit">
            Login
          </Button>

          <ProviderFormList page="signin" />
        </div>

        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}

          <Link className="underline" href="/signup">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
