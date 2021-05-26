import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [json(), external(), typescript()],
};
