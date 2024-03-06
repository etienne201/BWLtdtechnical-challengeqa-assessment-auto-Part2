## Page Object Model Pattern with Playwright

![alt text](./playwright-logo.png)

This repository contains simple automation test framework written with  javascripte and Playwright and implements Page Object Model Pattern.
This project contains end-to-end tests using Playwright for testing user profile creation functionality.


If you want to run test locally, please follow these steps:

1. Clone this repository
2. Make sure you have `node.js` installed. If you don't, please visit [official website](https://nodejs.org/en/download/) for instructions 
3. Run `npm install or yarn install` to install node modules
4. That's it, now you can run tests with `npm run test` - it will run test in 3 browsers (chromium, firefox, webkit) in parallel.
 Run tests using one of the following commands:
- `npm test:ui`: Starts the interactive UI mode.
- `npm test:chromium`: Runs tests only on Desktop Chrome.
- `npm test example`: Runs tests in a specific file.
- `npm test:debug`: Runs tests in debug mode.
- `npm codegen`: Auto generates tests with Codegen.

 


## Challenges and Limitations

Document any challenges or limitations encountered during automation along with potential solutions or workarounds.
I'm having problems with the test case Verify the creation of a user profile by entering an invalid email address in the email field. and Verify that a user can create a profile by entering more than 10 digits in the phone number field.
I can't get the error message back 
