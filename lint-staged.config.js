module.exports = {
  '**/*.{ts,tsx}': () => ['pnpm nx affected --target=type-check'],
  '**/*.{js,ts,jsx,tsx,json}': [
    'pnpm nx affected:lint',
    'pnpm nx format:write',
  ],
};
