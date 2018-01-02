# [CodeDoor](http://codedoor.org/) TDD challenges

[![Join the chat at https://gitter.im/codedoor-challenges/Lobby](https://badges.gitter.im/codedoor-challenges/Lobby.svg)](https://gitter.im/codedoor-challenges/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/coderbyheart/codedoor-challenges.svg?branch=master)](https://travis-ci.org/coderbyheart/codedoor-challenges)
[![Greenkeeper badge](https://badges.greenkeeper.io/coderbyheart/codedoor-challenges.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/coderbyheart/codedoor-challenges/badge.svg)](https://snyk.io/test/github/coderbyheart/codedoor-challenges)
[![DeepScan Grade](https://deepscan.io/api/projects/1628/branches/5737/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=1628&bid=5737)

## How to get started with the challenges

Make sure you have a working development environment: an IDE, Node.JS 8.

- Fork and clone the repository.
- Install the dependencies: `npm i`
- Run the (failing) tests for the challenge.
- Implement the solution, until the tests pass.
- Feel free to add your own tests
- Commit the solution to your fork.

## Support

Please let me know if you want to start working on the first challenge, and join the [gitter channel](https://gitter.im/codedoor-challenges/Lobby), so I can support you. Alternatively you can [DM me on Twitter](https://twitter.com/coderbyheart/) or [report problems as issues](https://github.com/coderbyheart/codedoor-challenges/issues).

### Challenge 01: Pattern Converter

Running tests: `npx jest -w __test__/01`

Implement the solution in: `src/01/pattern-converter.js`

## About this project

This project contains JavaScript challenges which aim to introduce software craft concepts like [S.O.L.I.D. architecture](https://en.wikipedia.org/wiki/SOLID_-\(object-oriented_design\)) and [TDD](https://en.wikipedia.org/wiki/Test-driven_development).

I also show some common project defaults when writing JavaScript code (like linting).

 - [standard](https://www.npmjs.com/package/standard) defines how the source code should be formatted. Use `npm run lint -- --fix` to automatically fix your source code formatting.
 - [commitlint](http://marionebl.github.io/commitlint/) enforces a certain (parseable) format of commit messages.
 - [greenkeeper](https://greenkeeper.io/) watches the dependencies and creates pull request if these are updated
 - [Travis CI](https://travis-ci.org/) builds the project after every commit (in a real project, it would run the tests also)
 - [Snyk](https://snyk.io/) monitors the source code for security issues
 - [DeepScan](https://deepscan.io/) checks the code-quality
 - [.editorconfig](http://editorconfig.org/) configures the file formatting setting (indentation, line-endings) for all popular IDEs
