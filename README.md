# Ecommerce

## Start the application

Happy coding!

Run `pnpm nx dev user` to start the **user** development server.

Run `pnpm nx dev admin` to start the **admin** development server.

Run `pnpm nx dev backend` to start the **backend** development server.

## Build for production

The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

Run `pnpm nx build user` to build the **user** application.

Run `pnpm nx build admin` to build the **admin** application.

Run `pnpm nx build backend` to build the **backend** application.

## Type Check

Run `pnpm nx run user:type-check` to check the type error of **user** application.

Run `pnpm nx run admin:type-check` to check the type error of **admin** application.

Run `pnpm nx affected --target=type-check` to type check all affected apps and libraries
that have a typecheck target in their project.json. On the other hand, `affected` command
is used to determine what parts of your codebase are affected by changes you've made.

## Running tasks

To execute tasks with Nx use the following syntax:

```
pnpm nx <target> <project> <...options>
```

You can also run multiple targets:

```
pnpm nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
pnpm nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)
