import authMessages from "./messages/en/auth.json";
import homeMessages from "./messages/en/home.json";
import notFoundMessages from "./messages/en/not-found.json";
import { routing } from "./src/i18n/routing";

type Messages = typeof authMessages &
  typeof homeMessages &
  typeof notFoundMessages;

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}
