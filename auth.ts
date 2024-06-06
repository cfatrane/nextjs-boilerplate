import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";
import Apple from "next-auth/providers/apple";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

// * Info : https://authjs.dev/guides/pages/signin
const providers: Provider[] = [GitHub, Google, Apple];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();

    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
});
