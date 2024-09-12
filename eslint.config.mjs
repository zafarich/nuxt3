// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "no-console": "error",
    "@typescript-eslint/no-unused-vars": ["warn"],
  },
});
