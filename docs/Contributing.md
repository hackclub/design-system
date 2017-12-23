# Contributing

If youd like to contribute to the design system, we’d love to have your help.

Contributing doesn’t necessarily mean committing code, we also encourage you to:

* Open issues
* Join in on discussions in issues and PRs
* Help write documentation
* Use the Design System in your project and provide feedback

## Local Development

To contribute code to the Design System, first you’ll need to set it up for local development.

### Clone the repo:

```sh
git clone https://github.com/hackclub/design-system.git
cd design-system
```

### Install dependencies:

```sh
npm install
```

### Running tests

We use [Jest][jest] for testing, including unit tests for functionality and [snapshot testing][snapshots] for components.

```sh
npm test
```

To run tests in watch mode (useful for TDD):

```sh
npm test -- --watch
```

If you make intentional changes to an existing component, you will need to update its snapshot:

```sh
npm test -- -u
```

### Storybook

We use [Storybook][storybook] for isolated UI component development.

To run storybook locally:

```sh
npm start
open http://localhost:8000/
```

## Troubleshooting

You may run into the following error `ERROR in ./icons.json` when running storybook. The problem occur when the icons.json is not built yet. Running `npm run prepare` should fix the problem.
