import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [".next/**"], // Ignore .next directory
  },
];

export default eslintConfig;
