exports.UserProfileCreation = class UserProfileCreation {
    constructor(page) {
        this.page = page;
        this.firstName_textbox = page.getByLabel('First Name (mandatory):');
        this.lastName_textbox = page.getByLabel('Last Name (mandatory):');
        this.email_textbox = page.getByLabel('Email (mandatory):');
        this.emailInval_textbox = page.getByLabel('Email (mandatory):');
        this.password_textbox = page.getByLabel('Password (mandatory):', { exact: true });
        this.passwordConfirm_textbox = page.getByLabel('Confirm Password (mandatory):');
        this.confirmPasswordErr_textbox = page.getByLabel('Confirm Password (mandatory):');
        this.gendercke_textbox = page.getByLabel('Male', { exact: true });
        this.dateofbirth_textbox = page.getByLabel('Date of Birth (optional):', { timeout: 10000 });
        this.phonenumber = page.getByLabel('Phone Number (optional):');
        this.address = page.getByLabel('Address (optional):');
        this.LinkedInUrl = page.getByLabel('LinkedIn URL (optional):');
        this.GitHubURL = page.getByLabel('GitHub URL (optional):');
        this.submitbutton = page.getByRole('button', { name: 'Submit' });
    }

    async gotoUserProfileCreation() {
        await this.page.goto('https://qa-assessment.pages.dev/');
    }

    async submitall(firstName, lastName, email, password, confirmPassword, dateOfBirth, phoneNumber, address, linkedInUrl, gitHubURL) {
        // Fill in form fields
        await this.firstName_textbox.fill(firstName);
        await this.lastName_textbox.fill(lastName);
        await this.email_textbox.fill(email);
        await this.password_textbox.fill(password);
        await this.passwordConfirm_textbox.fill(confirmPassword);
        await this.gendercke_textbox.check();
        await this.page.evaluate(({ dateOfBirth }) => {
            document.getElementById('dob').value = dateOfBirth;
        }, { dateOfBirth });
        await this.phonenumber.fill(phoneNumber);
        await this.page.evaluate(({ address }) => {
            document.getElementById('address').value = address;
        }, { address });
        await this.LinkedInUrl.fill(linkedInUrl);
        await this.GitHubURL.fill(gitHubURL);
        await this.submitbutton.click();
    }

    async submitPasswordErr(firstName, lastName, email, password, PasswordErr) {
        // Fill in form fields
        await this.firstName_textbox.fill(firstName);
        await this.lastName_textbox.fill(lastName);
        await this.email_textbox.fill(email);
        await this.password_textbox.fill(password);
        await this.confirmPasswordErr_textbox.fill(PasswordErr);
        await this.submitbutton.click();
    }

    async submitEmailInval(firstName, lastName, emailInval, password, confirmPassword) {
        // Fill in form fields
        await this.firstName_textbox.fill(firstName);
        await this.lastName_textbox.fill(lastName);
        await this.emailInval_textbox.fill(emailInval);
        await this.password_textbox.fill(password);
        await this.passwordConfirm_textbox.fill(confirmPassword);
        await this.submitbutton.click();
    }

    async submitFirsoRtLanstInval(firstName, lastName, email, password, confirmPassword, dateOfBirth, phoneNumber, address, linkedInUrl, gitHubURL) {
        // Fill in form fields
        await this.firstName_textbox.fill(firstName);
        await this.lastName_textbox.fill(lastName);
        await this.email_textbox.fill(email);
        await this.password_textbox.fill(password);
        await this.passwordConfirm_textbox.fill(confirmPassword);
        await this.gendercke_textbox.check();
        await this.page.evaluate(({ dateOfBirth }) => {
            document.getElementById('dob').value = dateOfBirth;
        }, { dateOfBirth });
        await this.phonenumber.fill(phoneNumber);
        await this.page.evaluate(({ address }) => {
            document.getElementById('address').value = address;
        }, { address });
        await this.LinkedInUrl.fill(linkedInUrl);
        await this.GitHubURL.fill(gitHubURL);
        await this.submitbutton.click();
    }

    async submitincorrphone(firstName, lastName, email, password, confirmPassword, dateOfBirth, phoneNumber, address, linkedInUrl, gitHubURL) {
        // Fill in form fields
        await this.firstName_textbox.fill(firstName);
        await this.lastName_textbox.fill(lastName);
        await this.email_textbox.fill(email);
        await this.password_textbox.fill(password);
        await this.passwordConfirm_textbox.fill(confirmPassword);
        await this.gendercke_textbox.check();
        await this.page.evaluate(({ dateOfBirth }) => {
            document.getElementById('dob').value = dateOfBirth;
        }, { dateOfBirth });
        await this.phonenumber.fill(phoneNumber);
        await this.page.evaluate(({ address }) => {
            document.getElementById('address').value = address;
        }, { address });
        await this.LinkedInUrl.fill(linkedInUrl);
        await this.GitHubURL.fill(gitHubURL);
        await this.submitbutton.click();
    }
};