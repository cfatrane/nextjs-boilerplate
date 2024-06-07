import { redirect } from "next/navigation";

import { providerMap, signIn } from "@/auth";
import { AuthError } from "next-auth";

import { Button } from "@/components/ui/button";

const SIGNIN_ERROR_URL = "/error";

type ProviderListProps = { page: "signin" | "signup" };

function ProviderFormList({ page }: ProviderListProps) {
  let textStart: string;

  switch (page) {
    case "signin":
      textStart = "Login";
      break;
    case "signup":
      textStart = "Sign up";
      break;

    default:
      break;
  }

  return (
    <>
      {/* https://authjs.dev/guides/pages/signin */}
      {Object.values(providerMap).map((provider) => (
        <form
          action={async () => {
            "use server";

            try {
              await signIn(provider.id);
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
              }

              // Otherwise if a redirects happens NextJS can handle it
              // so you can just re-thrown the error and let NextJS handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error;
            }
          }}
          key={provider.id}
        >
          <Button className="w-full" type="submit" variant="outline">
            {textStart} with {provider.name}
          </Button>
        </form>
      ))}
    </>
  );
}
export default ProviderFormList;
