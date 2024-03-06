import { test, expect } from '@playwright/test';
import { UserProfileCreation } from '../pages/UserProfileCreation';

// Test for successful profile creation
test('Check whether a user can create a profile by filling in mandatory and optional information', async({ page }) => {
    const timeout = 60000; // 60 seconds
    const userProfile = new UserProfileCreation(page);
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

// Test for password mismatch error
test('Check whether an error is generated when the password confirmation does not match the password entered', async({ page }) => {
    const timeout = 120000; // 120 seconds
    const userProfile = new UserProfileCreation(page);
    test.setTimeout(timeout);

    await userProfile.gotoUserProfileCreation();

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

    await page.waitForTimeout(1000);

    expect(alertMessage).toBe('Passwords do not match');
});

// Test for invalid email address error
test('Verify the creation of a user profile by entering an invalid email address in the email field', async({ page }) => {
    const timeout = 120000; // 120 seconds
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
});

// Test for invalid first and last name error
test('Check that a user can create a profile by providing an invalid first and last name', async({ page }) => {
    const timeout = 120000; // 120 seconds
    const userProfile = new UserProfileCreation(page);
    test.setTimeout(timeout);

    await userProfile.gotoUserProfileCreation();

    let alertMessage = null;
    page.on('dialog', async dialog => {
        alertMessage = dialog.message();
        await dialog.dismiss();
    });

    await userProfile.submitFirsoRtLanstInval(
        'John Doe',
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

    await page.waitForTimeout(1000);

    expect(alertMessage).toBe('First name must contain alphabetical characters only');
});

// Test for invalid phone number error
test('Check that a user can create a profile by entering more than 10 digits in the Phone number field', async({ page }) => {
    const timeout = 60000; // 60 seconds
    const userProfile = new UserProfileCreation(page);
    test.setTimeout(timeout);

    await userProfile.gotoUserProfileCreation();

    await userProfile.submitincorrphone(
        'John',
        'Smith',
        'john.smith@example.com',
        'P@ssw0rd',
        'P@ssw0rd',
        '1990-01-01',
        '12345678902',
        '123 Main St, Apt 1',
        'https://www.linkedin.com/in/johnsmith',
        'https://github.com/johnsmith'
    );
});