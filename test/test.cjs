const esbuild = require("esbuild");
const { regexpExternals } = require("../lib/index.cjs");

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
