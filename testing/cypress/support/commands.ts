import * as generalCommands from './command/general';
import * as authCommands from './command/auth';

Cypress.Commands.addAll(generalCommands);
Cypress.Commands.addAll(authCommands);

export {};

