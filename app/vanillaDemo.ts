import { Mod } from "libVanilla";

declare module "libVanilla" {
  namespace Mod {
    interface EventMap {
      myEvent: string;
    }
  }
}

Mod.addListener("myEvent", (val) => {
  console.log(val.toUpperCase());
});
