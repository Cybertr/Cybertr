# Development

This document explains the development environment around the Squad Mortar Calculator project.

## Setup

1. Prepare development environment for React Native
2. Clone the repository
3. Install NPM dependencies
4. Start the app bundler and emulator

```bash
# Start the app bundler
npm run start
```

## Code Quality

Code quality is managed with ESLint (linting) and Prettier (formatting).

```bash
# Lint the code
npm run lint

# Format the code
npm run format
```

## Tests

Jest tests can be run with several scripts:

```bash
# Run basic tests
npm run test

# Run tests with code coverage generation
npm run test:cover
```

## WSL

Development on Windows can be improved drastically by installing and using Windows Subsystem for Linux (WSL). After downloading and installing a Linux distribution, clone the project in the distribution and install dependencies. Open a remote connection to WSL in VSCode and select the project directory from the installed distribution.
