Demonstrates an issue with tsup and declaration merging with an interface that's exported via a `export * as Namespace`.

### Instructions

`npm install` - other setup happens in the postinstall hook

You should then see that `app/vanillaDemo.ts` compiles okay, while `app/tsupDemo.ts` doesn't - both are consuming the same `lib` code, just packaged via `tsc` and `tsup` respectively.
