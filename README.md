# esbuild-plugin-regexp-externals

[esbuild](https://esbuild.github.io/) plugin for specifying external modules with regular expressions.


## Usage example

```js
import { regexpExternals } from "@fal-works/esbuild-plugin-regexp-externals";

esbuild.build({
  bundle: true,
  entryPoints: ["src/main.js"],
  outfile: "dist/bundle.js",
  plugins: [regexpExternals(/^[^\\.]/)],
});
```

In this example any module paths that don't start with a dot will be marked as external.


## Allowed expressions

See [docs of esbuild plugins](https://esbuild.github.io/plugins/):

> The allowed regular expression syntax is the syntax supported by Go's regular expression engine. This is slightly different than JavaScript. Specifically, look-ahead, look-behind, and backreferences are not supported.
