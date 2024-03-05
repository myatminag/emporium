module.exports = {
  '{apps,packages}/*/**/*.{ts,tsx}': () => [
    'pnpm nx affected --target=type-check',
  ],
  '{apps,packages}/*/**/*.{js,ts,jsx,tsx,json}': [
    'pnpm nx affected:lint',
    'pnpm nx format:write',
  ],
};
