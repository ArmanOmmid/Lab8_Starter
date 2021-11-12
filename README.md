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
No. Using a unit test to test a feature like this is inappropriate because the funcitonality of this feature is likely emergent from multiple components for the feature to be able to both write and send a message to another user and unit testing cannot test how these components interact at this level.  

#### 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes. Using a unit test to test this feature is appropriate because this is small scale debugging for a feature that has a very encapsulated/isolated property because its just checking the length of a message and this feature can't be reduced much further in components making it a "unit" of sorts. 

