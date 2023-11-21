import { Mod } from "libTsup";

declare module "libTsup" {
  namespace Mod {
    interface EventMap {
      myEvent: string;
    }
  }
}

Mod.addListener("myEvent", (val) => {
  console.log(val.toUpperCase());
});
