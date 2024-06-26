import Link from "next/link";

import { useTranslations } from "next-intl";

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
import { Separator } from "@/components/ui/separator";

// * Link : https://authjs.dev/guides/pages/signin
export default function SignInPage() {
  const t = useTranslations("Auth");

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{t("SignIn.title")}</CardTitle>

        <CardDescription>{t("SignIn.subtitle")}</CardDescription>
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
                {t("SignIn.forgotPassword")}
              </Link>
            </div>

            <Input id="password" required type="password" />
          </div>

          <Button className="w-full" type="submit">
            {t("SignIn.button")}
          </Button>

          <div className="my-4 flex items-center justify-center gap-2">
            <Separator className="shrink" />

            <p className="px-4">ou</p>

            <Separator className="shrink" />
          </div>

          <ProviderFormList page="signin" />
        </div>

        <div className="mt-4 text-center text-sm">
          <span>Don&apos;t have an account? </span>

          <Link className="underline" href="/signup">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
