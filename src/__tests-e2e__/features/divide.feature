Feature: As a user, i want to divide two numbers
 
Scenario: Happy Path: Divide two numbers
    Given a calculator
    When I divide 8 by 2
    Then the result is 4

Scenario: Failing test - Divide two numbers
    Given a calculator
    When I divide 8 by 2
    Then the result isn't 5