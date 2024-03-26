//-----------------------------------------------------------------------------------------------------------------------------------------------------
// chore: used for miscellaneous changes that don't affect the main codebase(configuring development tools, setting up project-specific settings)
// ci: Changes to our CI configuration files and scripts
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
// update: Updates to the project's build process, CI configuration files, or other tools and libraries.
// wip: Work in process
// -----------------------------------------------------------------------------------------------------------------------------------------------------

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'perf',
        'update',
        'wip',
      ],
    ],
  },
};
