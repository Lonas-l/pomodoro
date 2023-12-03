// Several tests using test cases, include APIs For show my skills

describe("Login Tests", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("FRONT_URL")}`);
    });

    it("Login with correct data", () => {
        cy.login();
        cy.get('.Toastify__toast-container').should('have.text', '🦄 Login Complete')
    });
});