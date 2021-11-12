# Lab 8 - Starter
## Lab Partners: Arman Ommid (Just Me)
## GitHub Pages Link:
https://armanommid.github.io/Lab8_Starter/
## "Check Your Understanding" questions answers:
#### 1) In your own words: Where would you fit your automated tests in your Recipe project development pipeline?
I would fit my automated tests in my Recipe project developement pipleine **within a github action that runs whenever code is pushed** because that way I can automatically test any changes being pushed to my repository so that disfunctional code isn't being accidently merged at any point in the repository. Manually running them locally before pushing code is a waste of time when the tests can be automated specifically on every push while running them all after development is completed just poor practice as we are unaware of issue thorughout development and don't have thorough testing throughout the development.

#### 2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
No. For testing to check if a specific function is returning the correct output we should at most run the test suite that involves the function or more realistically test on the function itself directly. It's unnecessary to do end to end. 

#### 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No. No using a single unit test to test a feature like this is inappropriate because 

#### 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes. Because this feature 

