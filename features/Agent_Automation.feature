Feature: Verify the wishinfinite platform.

Scenario Outline: Verify login and logout functionality of the wishinfinite platform.
    Given I am on the wishinfinite login page
    When I enter "<username>" and "<password>"
    And I click on the login button
    Then verify I should be logged in successfully
    When I click on the logout button
    Then verify I should be logged out successfully

    Examples:
      | username       | password   |
      | testuser1      | pass123    |
