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

export default function SignUpPage() {
  const t = useTranslations("Auth");

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{t("SignUp.title")}</CardTitle>

        <CardDescription>{t("SignUp.subtitle")}</CardDescription>
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
            {t("SignUp.button")}
          </Button>

          <div className="my-4 flex items-center justify-center gap-2">
            <Separator className="shrink" />

            <p className="px-4">ou</p>

            <Separator className="shrink" />
          </div>

          <ProviderFormList page="signup" />
        </div>

        <div className="mt-4 text-center text-sm">
          <span>Already have an account? </span>

          <Link className="underline" href="/signin">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
