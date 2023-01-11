# SQA-Assignment-2---Number-System-Converter
Assignment work

## Testing 
Smoke test
Number is captured through input 
Button press successfully triggers function
Number converted to 1 bit
Number converted to 2 bits
Number converted to 3 bits
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
- User is able to input numbers (and only numbers) into the input field
- "Convert to decimal" button press triggers JS function and d



### Stand Up - 11/01 
Commit and pull request review of initial commit 
Pull request was sizeable, but only due to the installation of various package modules
Git strategy going forward - keeping various branches until we're sure they're not needed anymore
Setup of Merge Request Rules and first pass of coding standards
Agreed use of GitHub issues

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