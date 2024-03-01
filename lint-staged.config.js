module.exports = {
  '{apps,libs,tools}/**/*.{ts,tsx}': (files) => {
    return `pnpm nx affected --target=typecheck --files=${files.join(',')}`;
  },
  // '*.{ts,tsx}': () => ['pnpm nx affected --target=type-check'],
  // '*.{js,ts,tsx}': () => [
  //   'pnpm nx affected:lint --untracked=false --fix',
  //   'ppnm nx affected:test --untracked=false --color',
  //   'pnpm nx affected:build --untracked=false',
  // ],
};
