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

function ForgotPasswordPage() {
  const t = useTranslations("Auth");

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{t("ForgotPassword.title")}</CardTitle>

        <CardDescription>{t("ForgotPassword.subtitle")}</CardDescription>
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

          <Button className="w-full" type="submit">
            {t("ForgotPassword.button")}
          </Button>
        </div>

        <div className="mt-4 text-center text-sm">
          <span>Vous n&apos;avez pas de compte ? </span>

          <Link className="underline" href="/signup">
            S&apos;inscrire
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
export default ForgotPasswordPage;
