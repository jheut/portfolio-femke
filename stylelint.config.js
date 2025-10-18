/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-astro"],
  ignoreFiles: ["dist/**/*"],
  rules: {
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["light-dark"],
      },
    ],
  },
};
