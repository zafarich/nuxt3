// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never", // index files
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-unused-vars": "warn", // Ishlatilmagan o'zgaruvchilar uchun ogohlantirish
    "no-console": "warn", // console.log() uchun ogohlantirish
    "vue/multi-word-component-names": "error", // Komponent nomlari ko'p so'zli bo'lishi kerak
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "linebreak-style": ["error", "unix"],
    "vue/multi-word-component-names": "off",
  },
});
