import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import common from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import vue from 'rollup-plugin-vue';

export default [
  {
    input: "src/index.js",
    output: {
      file: "lib/index.js",
      format: "cjs"
    },
    external: ['path'],
    plugins: [babel(), common(), resolve()]
  },
  {
    input: "src/clientAppSetupFiles.js",
    output: {
      file: "lib/clientAppSetupFiles.js",
      format: "esm"
    },
    plugins: [
      vue(),
      postcss({ plugins: [autoprefixer] }),
      babel(),
      common(),
      resolve()
    ]
  }
];
