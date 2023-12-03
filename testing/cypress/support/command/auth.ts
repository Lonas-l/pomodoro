
export const login = (name: string = 'user', password: string = 'user') => {
    cy.getByTestId('authName').focus().clear().type(name);
    cy.getByTestId('authPassword').focus().clear().type(password);
    cy.intercept('post', '**/auth/login').as('login')
    cy.getByTestId('authConfirmButton').click();
    cy.wait('@login').its('response.statusCode').should('eq', 200);
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(name?: string, password?: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}