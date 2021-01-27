import type { Plugin } from "esbuild";

/**
 * @param filter `RegExp` that match any module paths to be marked as external.
 */
export const regexpExternals = (filter: RegExp): Plugin => ({
  name: "regexp-externals",
  setup(build) {
    build.onResolve({ namespace: "file", filter }, (args) => ({
      path: args.path,
      external: true,
    }));
  },
});

export default regexpExternals;
