import esbuild from "esbuild";
import { regexpExternals } from "../lib/index.js";

(async () => {
  const outfile = `test/bundle.js`;

  await esbuild.build({
    entryPoints: ["test/entry.js"],
    outfile,
    bundle: true,
    format: "esm",
    plugins: [regexpExternals(/^[^.]/)],
  });

  console.log(`Emit: ${outfile}`);
})();
