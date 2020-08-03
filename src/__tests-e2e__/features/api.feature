Feature: As a user, i want to test an api

Scenario: get elements from an endpoint
    Given I make a request to the "/Patient" endpoint 
    Then I get the results