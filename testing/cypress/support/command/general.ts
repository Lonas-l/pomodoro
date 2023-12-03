import { selectByTestId } from '../../helper/getByTestId';

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId), { timeout: 10000 });
};

declare global {
    namespace Cypress {
        interface Chainable {
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}