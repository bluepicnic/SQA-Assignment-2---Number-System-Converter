# SQA-Assignment-2---Number-System-Converter
Assignment work

## The Team
<table>
  <tbody align="center">
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Responsibilities</th>
      <th>Github</th> 
    </tr>
    <tr>
      <td>Luke Jones</td>
      <td>JS Developer (Back end code), tester</td>
      <td>Writing, carrying out and documenting unit tests and processes, binary to decimal system conversion code<td>
      <td></td>
    </tr>
    <tr>
      <td>Cameron Yorke</td>
      <td>QA Tester</td>
      <td>Writing UI tests and test plan, documentation of processes, setup of CI/CD workflows<td>
      <td></td>
    </tr>
    <tr>
      <td>Jacob Bright</td>
      <td>Full stack developer</td>
      <td>Creation of front end scripts, project styling through CSS, code refactoring, decimal to binary system conversion<td>
      <td></td>
    </tr>
    
  </tbody>
</table>
## Testing 
Smoke test
Number is captured through input 
Button press successfully triggers function
Number converted to 1 bit - Expected 1
Number converted to 2 bits - 2/3 expected
Number converted to 3 bits - 4/5/6/7/8
Number converted to 4 bits
Number converted to 5 bits
Number converted to 6 bits
Number converted to 7 bits
Number converted to 8 bits/1 byte
Binary number converted to decimal
UI Testing
Integration testing - CICD

## TDD
#### Test Requirements
We adopted Test Driven Development (TDD) as our software development process in order to write quality tests for our code and emphasise our focus on requirements. This aliged with the processes we were following within our github repository, as we ensured we had a CI/CD workflow within github actions  and a number of issues to track progress with. 

Tests were written prior to implementing any functionality in order to adhere to TDD at each stage of development. Before developing the front end, we drafted various tests to potentially be used later in development. These tests were later refined before implementing any javascript code related to functionality, and were added as unit tests to the *index.jest.js* file.

### Manual UI Tests
<table>
  <tbody align="center">
    <tr>
      <th>No.</th>
      <th>Actions</th>
      <th>Steps</th>
      <th>Expected Outcome</th>
      <th>Actual Outcome</th>
      <th>Test result</th>
    </tr>
    <tr>
      <td>1.</td>
      <td>Number is captured through input</td>
      <td>
        <ol>
          <li>Clicks on the input field</li>
          <li>Enter number into field</li>
        </ol>
      </td>
      <td>The input field should contain the entered number</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2.</td>
      <td>"Convert to binary" button press converts decimal number in input field to binary</td>
      <td>
        <ol>
          <li>Click on the decimal input field, under the relevant heading</li>
          <li>Enter decimal number into field</li>
          <li>Click "convert to binary" button</li>
        </ol>
      </td>
      <td>Relevant output field should contain converted decimal number expressed as a binary number </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3.</td>
      <td>"Convert to decimal" button press converts binary number in input field to decimal</td>
      <td>
        <ol>
          <li>Click on the binary input field, under the relevant heading</li>
          <li>Enter binary number into field</li>
          <li>Click "convert to decimal" button</li>
        </ol>
      </td>
      <td>Relevant output field should contain converted binary number expressed as a decimal number </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
     <td>4.</td>
      <td>Error message alert appears when trying to convert binary number using "convert to binary" button and field</td>
      <td>
        <ol>
          <li>Click on the binary input field</li>
          <li>Enter binary number into relevant field</li>
          <li>Click "convert to binary" button</li>
        </ol>
      </td>
      <td>Alert error message should appear with text "You cannot convert a binary number to binary!" </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
     <td>5.</td>
      <td>Error message alert appears when trying to convert decimal number using "convert to decimal" button and field</td>
      <td>
        <ol>
          <li>Click on the decimal input field</li>
          <li>Enter decimal number into relevant field</li>
          <li>Click "convert to decimal" button</li>
        </ol>
      </td>
      <td>Alert error message should appear with text "You cannot convert a decimal number to decimal!" </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
     <td>6.</td>
      <td>Error message alert appears when trying to enter non-numbers into decimal input field</td>
      <td>
        <ol>
          <li>Click on the decimal input field</li>
          <li>Enter text string with non-numbers into decimal input field</li>
          <li>Click "convert to decimal" button</li>
        </ol>
      </td>
      <td>Alert error message should appear with text "Please enter a decimal number" </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
     <td>7.</td>
      <td>Error message alert appears when trying to enter non-numbers into binary input field</td>
      <td>
        <ol>
          <li>Click on the binary input field</li>
          <li>Enter text string with non-numbers into binary input field</li>
          <li>Click "convert to binary" button</li>
        </ol>
      </td>
      <td>Alert error message should appear with text "Please enter a binary number" </td>
      <td></td>
      <td></td>
    </tr>
   </tbody>
</table>

### Automated Unit Tests

<table>
  <tbody>
    <tr>
      <th>No.</th>
      <th>Actions</th>
      <th>Expected Outcome</th>
      <th>Actual Outcome</th>
      <th>Test result</th>
    </tr>
    <tr>
     <td>1.</td>
      <td>Converting the value "110010" in binary to "50" in decimal</td>
      <td>Binary number should be converted to 50, as shown in the output</td>
      <td>Binary number is converted to 50 in decimal in the output field</td>
      <td>Pass</td>
    </tr>
    <tr>
     <td>2.</td>
      <td>Converting the value "1111" in binary to "15" in decimal</td>
      <td>Binary number should be converted to 15, as shown in the output</td>
      <td>Binary number is converted to 15 in decimal in the output field</td>
      <td>Pass</td>
    </tr>
    <tr>
     <td>3.</td>
      <td>Converting the value "1100101" in binary to "101" in decimal</td>
      <td>Binary number should be converted to 101, as shown in the output</td>
      <td>Binary number is converted to 101 in decimal in the output field</td>
      <td>Pass</td>
    </tr>
    <tr>
     <td>4.</td>
      <td>Converting the value "1010" in binary to "10" in decimal</td>
      <td>Binary number should be converted to 10, as shown in the output</td>
      <td>Binary number is converted to 10 in decimal in the output field</td>
      <td>Pass</td>
    </tr>
    <tr>
     <td>5.</td>
      <td>Error message alert appears when attempting to enter letters into the binary input field</td
      <td>Error message appears "Error, enter a valid input"</td>
      <td>Error message appears "Error, enter a valid input"</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>6.</td>
      <td>Error message alert appears when attempting to enter decimal numbers into the binary input field</td
      <td>Error message appears "Error, enter a valid input"</td>
      <td>Error message appears "Error, enter a valid input"</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>7.</td>
      <td>Converting the value "50" in decimal to "110010" in decimal</td>
      <td>Decimal number should be converted to 110010, as shown in the output</td>
      <td>Decimal number is converted to 110010, as shown in the output</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>8.</td>
      <td>Converting the value "15" in decimal to "1111" in decimal</td>
      <td>Decimal number should be converted to 1111, as shown in the output</td>
      <td>Decimal number is converted to 1111, as shown in the output</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>9.</td>
      <td>Converting the value "101" in decimal to "1100101" in decimal</td>
      <td>Decimal number should be converted to 1100101, as shown in the output</td>
      <td>Decimal number is converted to 1100101, as shown in the output</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>10.</td>
      <td>Converting the value "255" in decimal to "11111111" in decimal</td>
      <td>Decimal number should be converted to 11111111, as shown in the output</td>
      <td>Decimal number is converted to 11111111, as shown in the output</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>11.</td>
      <td>Converting the value "10" in decimal to "1010" in decimal</td>
      <td>Decimal number should be converted to 1010, as shown in the output</td>
      <td>Decimal number is converted to 1010, as shown in the output</td>
      <td>Pass</td>
    </tr>
  </tbody>
</table>

##### UI Tests
- User is able to input numbers (and only numbers) into the input field
- "Convert to decimal" button press triggers decimal conversion JS function
- "Convert to binary" button press triggers binary conversion JS function 
- Output field displays decimial conversion result in Binary
- Output field displays binary conversion conversion result as decimal
- Decimal to Binary input field will refuse conversion if a number is not detected
- Binary to decimal input field will refuse conversion if a binary number is not detected





### Stand Up - 11/01 
Commit and pull request review of initial commit 

Pull request was sizeable, but only due to the installation of various package modules

Git strategy going forward - keeping various branches until we're sure they're not needed anymore
Setup of Merge Request Rules and first pass of coding standards

Agreed use of GitHub issues

Retro 12/01 
- CI/CD Workflow preventing current version from being merged
- CSS needs to be refactored



### Coding standards
- Variables should be declared with camel casing
- Comment code regularly by describing its purpose, rather than what it does, in plain language for all to read
- Braces should be aligned in a slanted style
- Avoid global variables where possible, use "let"
- Minimise code duplication and unnecessary redundancy
- Use space consistently within code to separate various blocks and 
- Follow DRY standard, don't repeat yourself
- Use versioning control to assist with collaboration


### Merge Request Rules
1. Should be approved by someone other than the person that created the MR
2. Comments should be made on code that does not meet criteria
3. Code should not be merged if it doesn't pass CI/CD pipeline
4. All tests must pass
5. Commit must have relevant description before pushing
6. Check for correct and best coding standards used
7. New code should have corresponding unit tests

### Definiton of Done
- Code has gone through CI/CD pipeline
- All unit tests have passed
- No errors or issues within the code
- All pull requests have been reviewed by members of the team with relevant comments
- Project is well documented with README
- All requirements have been fulfilled

### CI Pipeline
Our pipeline consists of running two scripts. One for code coverage and the other for automating the unit tests. 

The unit test pipeline is ran everytime there is a new pull request. Using node we installed yarn and after that using yarn test that triggers the test suite. Then all unit tests are run on the code. If there are any test failures the pipeline will fail and the code should not be merged.

The code coverage pipeline tests for the amount source code that is covered by tests and leaving a report with a percentage of code covered. This is checked when a pull request is made. Using node we install npm and run npm test -- --coverage which will return the result.

Both of these yaml files are found in .github/workflows and utilises github actions.
