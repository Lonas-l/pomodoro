// Several tests using test cases, include APIs For show my skills

describe("Settings test", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("FRONT_URL")}`);
    });

    it("Update settings", () => {

        const newSettings = {
            "durationPomodoro": Math.floor(Math.random() * 10) + 1,
            "shortBreakDuration": Math.floor(Math.random() * 10) + 1,
            "longBreakDuration": Math.floor(Math.random() * 10) + 1,
            "isAutoStartBreaks": (Math.random() < 0.5),
            "isAutoStartPomodoro": (Math.random() < 0.5),
            "isSoundEnabled": (Math.random() < 0.5),
            "isRain": (Math.random() < 0.5),
            "breakInterval": Math.floor(Math.random() * 10) + 1
        };

        cy.login().then(() => {
            const token = localStorage.getItem("accessToken");

            cy.request({
                method: "PUT",
                url: `${Cypress.env("BACK_URL")}/auth/updateSettings`,
                headers: {
                    Authorization: `${token}`
                },
                body: newSettings
            }).then((responce) => {
                expect(responce.status).to.eq(200)

                cy.getByTestId('settingsButton').click();

                cy.getByTestId('pomodoro').should('have.value', newSettings.durationPomodoro)
                cy.getByTestId('shortbreak').should('have.value', newSettings.shortBreakDuration)
                cy.getByTestId('longbreak interval').should('have.value', newSettings.breakInterval)
                cy.getByTestId('longbreak').should('have.value', newSettings.longBreakDuration)
                // etc..
            });
        });

    });
});