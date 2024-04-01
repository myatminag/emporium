module.exports = {
  // Target specific folders for type checking (if needed)
  'apps/**/*.{ts,tsx}': () => ['pnpm nx affected --target=type-check --noEmit'],
  'packages/**/*.{ts,tsx}': () => [
    'pnpm nx affected --target=type-check --noEmit',
  ],

  // Use lint-staged built-in globbing for staged files
  // '**/*.{js,ts,jsx,tsx}': ['pnpm nx affected:lint', 'pnpm nx format:write'],
};
