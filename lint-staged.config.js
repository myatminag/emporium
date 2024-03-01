module.exports = {
  '{apps,packages}/**/*.{ts,tsx}': () => [
    'pnpm nx affected --target=type-check',
  ],
  // '*.{ts,tsx}': () => ['pnpm nx affected --target=type-check'],
  // '*.{js,ts,tsx}': () => [
  //   'pnpm nx affected:lint --untracked=false --fix',
  //   'ppnm nx affected:test --untracked=false --color',
  //   'pnpm nx affected:build --untracked=false',
  // ],
};
