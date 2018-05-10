# Contributing

If you’d like to contribute to the design system, we’d love to have your help.

Contributing doesn’t necessarily mean committing code, we also encourage you to:

* Open issues
* Join in on discussions in issues and PRs
* Help write documentation (storybook)
* Use the Design System and provide feedback

## Local Development

To contribute code to the Design System, first you’ll need to set it up for local development.

### Clone the repo

```sh
git clone https://github.com/hackclub/design-system.git
cd design-system
```

### Install dependencies

```sh
yarn
```

### Running tests

We use [Jest][jest] for testing, including unit tests for functionality and [snapshot testing][snapshots] for components.

```sh
yarn test
```

If you make intentional changes to an existing component, you will need to update its snapshot:

```sh
yarn test -u
```

If you want to check test coverage (goal is 100% coverage):

```sh
yarn run coverage
```

Jest will run, generate a coverage report, and open it in your browser.

### Storybook

We use [Storybook][storybook] for isolated UI component development, and
documentation for all the available components.

To run storybook locally:

```sh
yarn run dev
open http://localhost:8000/
```

## Creating a New Component

To make a new component you’ll need to make three files: the source code,
the test, and the storybook demo.

1. **Source file.** This goes in `src/New.js`, and should export a
   `styled-component` with `export default New` at the end and the component’s
   `propTypes` defined. Add an export to `src/index.js` so the component can be
   used elsewhere.
2. **Test.** The test should verify the core functionality works, using
   Jest’s snapshot testing. It should be located at `src/__tests__/New.js`,
   and follow the others’ formats, like [this example test][example_test].
   Once you’ve written the test, check that it passes (`npm test -- -u`) and
   verify 100% test coverage of your component (`npm run coverage`).
3. **Storybook.** We use the storybook as a development environment and for
   documentation. Create `.storybook/New.js` following the format of
   [this example storybook][example_storybook] demoing sample usage and props.

[jest]: https://facebook.github.io/jest/
[snapshots]: https://facebook.github.io/jest/docs/en/snapshot-testing.html#content
[storybook]: https://storybook.js.org
[example_test]: ../src/__tests__/Badge.js
[example_storybook]: ../.storybook/Badge.js
