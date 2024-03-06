# Project Name

## Description

This project contains end-to-end tests using Playwright for testing user profile creation functionality.

## Setup Instructions

1. Clone this repository.
2. Install dependencies using `yarn install`.
3. Run tests using one of the following commands:

- `yarn test`: Runs all end-to-end tests.
- `yarn test:ui`: Starts the interactive UI mode.
- `yarn test:chromium`: Runs tests only on Desktop Chrome.
- `yarn test example`: Runs tests in a specific file.
- `yarn test:debug`: Runs tests in debug mode.
- `yarn codegen`: Auto generates tests with Codegen.

## Test Documentation

### Test 1: Check user profile creation with mandatory and optional information

This test verifies whether a user can create a profile by filling in mandatory and optional information.

Command: `yarn test`

### Test 2: Check error when password confirmation does not match

This test checks whether an error is generated when the password confirmation does not match the entered password.

Command: `yarn test`

### Test 3: Verify creation of user profile with invalid email address

This test verifies the creation of a user profile by entering an invalid email address in the email field.

Command: `yarn test`

## Challenges and Limitations

Document any challenges or limitations encountered during automation along with potential solutions or workarounds.
