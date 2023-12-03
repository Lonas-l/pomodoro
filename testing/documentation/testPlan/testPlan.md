# Application/Feature Test Plan

## Introducion

The Test Plan has been created to communicate the test approach to team members. It includes the objectives, scope,
schedule, risks and approach. This document will clearly identify what the test deliverables will be and what is deemed
in and out of scope.

## Team Members

| Role        | Name          | Email                    |
|-------------|---------------|--------------------------|
| PM          | Collins Rael  | projectManager@email.com | 
| QA Lead     | Kaneki Ken    | qaLead@email.com         | 
| QA Engineer | Illia Holub   | qa@email.com             | 
| Dev Lead    | Chuck Posusta | devLead@email.com        | 
| Developer   | Fynn Turko    | developer@email.com      | 
| Design      | Gibb Parara   | design@email.com         | 

## Feature Description

A brief description here of either the overall application test plan or the test plan for the new feature under
development.

| Feature Name   | Jira Ticket | Product Spec        | Design Spec        |
|----------------|-------------|---------------------|--------------------|
| Feature 1 Name | TICKET-1    | product_spec_link_1 | design_spec_link_1 |
| Feature 2 Name | TICKET-2    | product_spec_link_2 | design_spec_link_2 |

### In Scope



### Out of Scope

To pass the system integration test, the following criteria must be met:
- All business processes are supported.
- All time functions work correctly.
- Setitngs functions work correctly.
- The system is easy to use by the end-users.
- Security controls are in place to prevent unauthorized system access.

2. Anything listed in out of scope segment will not be tested

## Environment

The proposed test environment

| Env Var        | Value                   |
|----------------|-------------------------|
| Line           | Dev/Staging/Prod        |
| Device         | Phone/Tablet/Desktop   |
| Target Release | Date or release version |
| Platforms      | iOs/Android/Web/        |

## Test Phases

Required or optional phases for release

| Phase       | Start  | End     | Env         | Test Content              | Teams                             |
|-------------|--------|---------|-------------|---------------------------|-----------------------------------|
| Prototyping | Jan 1. | Jan 30. | Dev         | Mocked Data               | Dev Team 1                        |
| Integration | Feb 1. | Feb. 14 | Inegration  | Test data set 1           | Dev Team 1, QA Team 1             | 
| E2E         | Feb 14 | Feb 24  | Integration | Test data set 1, 2, and 3 | Dev Team 1 and 2, QA Team 1 and 2 |
| Regression  | Feb 24 | Mar 10  | Staging     | All test data required    | QA Team 1                         | 
| Release     | Mar 11 | N/A     | Prod        | N/A                       | QA Team 1                         | 

## Estimated Release Date

Estimated release date: DD/MM/YYYY

## Testing Planned

Feature 1:
Integration of feature one with existing feature 0

Feature 2:
Visual validation of feature 2 elements

## Test Data

Feature 1 will require no new test data to be created

Feature 2 will require the following new data:
- New product type 1
- New product type 1 variation 1
- New product type 1 variation 2
- New User Interaction Option 1

## External Dependencies

- Feature 1 has an external dependency on team A which require delivery of *jira_link_to_ticket* 
- Feature 2 has no external dependencies

## Known Risks

This section describes the system or project risks and the contingency plans that should take effect if the project experiences problems.

- Authorization - Risk level to critical. Should a problem occur, new users will not able to access to application. Correcting a major defect in production could be very expensive.
- Timer Settings - Risk level moderate to high. Correcting a major defect in production could be very expensive.