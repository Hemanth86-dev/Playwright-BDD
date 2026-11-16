Feature: Logging into a website called DemoBlaze.com

#TC001
@Hooktest
Scenario: User login to DemoBlaze.com
  
    Given User login to "DemoBlaze"
    When User click on "loginButton" button
    And User enter "<username>" in "Username" field
    And User enter "<password>" in "Password" field
    And User click on "loginSubmitButton" button
    Then User verify that "<Welcome_Username>" is displayed on the homepage
    Then User verify that "Welcome_Username" from "Locators" is displayed on the homepage

    Examples:
    | username  | password   | Welcome_Username  |
    | HemanthMa | Begin@1234 | Welcome HemanthMa |


#TC002
Scenario: Verify the Laptop Availability.

    Given User login to "DemoBlaze"
    When User click on "loginButton" button
    And User enter "<username>" in "Username" field
    And User enter "<password>" in "Password" field
    And User click on "loginSubmitButton" button
    Then User verify that "<Welcome_Username>" is displayed on the homepage
    Then User verify that "Welcome_Username" from "Locators" is displayed on the homepage
    
    Then User verify that "Categories" from "Locators" is displayed on the homepage
    When User click on "Laptops" button
    Then User wait for "5" seconds
    #Then User scroll untill "Dell_i7_8gb" is visible on the page
    Then User verify that "MacBookAir" from "Locators" is displayed on the homepage
    When User click on "MacBookAir" button
    Then User wait for "5" seconds
    When User click on "Add_to_cart" button

    Examples:
    | username  | password   | Welcome_Username  |
    | HemanthMa | Begin@1234 | Welcome HemanthMa |