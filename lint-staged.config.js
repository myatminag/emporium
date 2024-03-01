module.exports = {
  '{packages,apps}/**/*.{js,ts,tsx}': [
    'pnpm nx affected:lint --uncommitted --fix true',
    'pnpm nx affected:test --uncommitted',
    'pnpm nx format:write --uncommitted',
  ],
  // '*.{ts,tsx}': () => ['pnpm nx affected --target=type-check'],
  // '*.{js,ts,tsx}': () => [
  //   'pnpm nx affected:lint --untracked=false --fix',
  //   'ppnm nx affected:test --untracked=false --color',
  //   'pnpm nx affected:build --untracked=false',
  // ],
};
