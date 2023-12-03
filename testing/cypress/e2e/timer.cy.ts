// Several tests using test cases for show my skills

describe("Timer", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("FRONT_URL")}`);
        cy.login();
    });

    it("Button Play Starts Timer", () => {
        cy.getByTestId('playPauseButton').click();
        cy.get('.resume').should('exist');
    });

    it("Button Pause stops Timer", () => {
        cy.getByTestId('playPauseButton').click();
        cy.getByTestId('playPauseButton').click();
        cy.get('.paused').should('exist');
    });

    it("Iteration count increased", () => {
        cy.getByTestId('nextButton').click();
        cy.getByTestId('nextButton').click();
        cy.getByTestId('iterationCount').should('have.text', 'Your iteration: 2');
    });
});