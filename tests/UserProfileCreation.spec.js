import { test, expect } from '@playwright/test';
import { UserProfileCreation } from '../pages/UserProfileCreation';




test('Check whether a user can create a profile by filling in mandatory and optional information ', async({ page }) => {
    // Increase timeout for this test 
    const timeout = 60000; // 60 seconds
    const userProfile = new UserProfileCreation(page);

    // Set a higher timeout for this specific test
    test.setTimeout(timeout);

    await userProfile.gotoUserProfileCreation();

    await userProfile.submitall(
        'John',
        'Smith',
        'john.smith@example.com',
        'P@ssw0rd',
        'P@ssw0rd',
        '1990-01-01',
        '1234567890',
        '123 Main St, Apt 1',
        'https://www.linkedin.com/in/johnsmith',
        'https://github.com/johnsmith'
    );
});

test('Check whether an error is generated when the password confirmation does not match the password entered', async({ page }) => {
    const timeout = 120000; // 120 seconds - increased timeout
    const userProfile = new UserProfileCreation(page);

    test.setTimeout(timeout);

    await userProfile.gotoUserProfileCreation();

    // Intercepting the alert message
    let alertMessage = null;
    page.on('dialog', async dialog => {
        alertMessage = dialog.message();
        await dialog.dismiss();
    });

    await userProfile.submitPasswordErr(
        'John',
        'Smith',
        'john.smith@example.com',
        'P@ssw0rd',
        'P@password123gagaf',
    );

    // Wait for a short time to allow the alert to appear
    await page.waitForTimeout(1000);

    // Check the alert message
    expect(alertMessage).toBe('Passwords do not match');
});


test('Verify the creation of a user profile by entering an invalid email address in the email field', async({ page }) => {
    const timeout = 120000; // 120 seconds - increased timeout
    const userProfile = new UserProfileCreation(page);

    test.setTimeout(timeout);

    await userProfile.gotoUserProfileCreation();

    await userProfile.submitEmailInval(
        'John',
        'Smith',
        'johndoeexample.com',
        'P@ssw0rd',
        'P@ssw0rd',
    );
    // // Wait for a short time to ensure any potential error messages are rendered
    // await page.waitForTimeout(1000); // Adjust the timeout as needed

    // // Capture visible text on the page which may contain error messages
    // const visibleText = await page.evaluate(() => document.body.innerText);

    // // Check if the error message is present in the visible text
    // const expectedErrorMessage = "Veuillez inclure \"@\" dans l'adresse e-email. il manque un symbole \"@\" dans \"johndoeexample.com\"";
    // expect(visibleText).textContent(expectedErrorMessage);




});