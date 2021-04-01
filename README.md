# team-profile-generator

## Approach 

This team-profile-generator is comprised of many working parts that all seamlessly come together to build a polished, professional HTML page that displays all of the employees of the company and a few details about each one. To Accomplish this was not an easy task, one thing that greatly heped was unit testing with test driven development. This is the process of making a test file for each part of your code so that they can each be tested seperately and make sure that they all work accordingly. One of the benefits of unit testing is easily being able to locate where certain errors might exsist. Instead of having one big test to comb through we know all other parts of the code work and it is just one part that we need to debug. Another great benefit is making your code more agile if you want to add more features in the future. To run all of this testing we used the Jest dependency. Besides the unit testing another main component of this program is using the dependency inquirer to be able to prompt the user and capture all of the user inputs so that they could then be appended to the HTML page using template literals. All of this comes together to make a user friendly, command line application that will generate a well laid out, polished team profile.

## Installation

To install this repo on your local drive you would have to clone the ssh key from my repo. Head into your local drive of choice in terminal or bash and do a git clone. Once you have done a git clone you are free to start working on this project. If you want to push your changes to my repo then you would have to head into terminal/bash and do a git add . Then a git commit -m explaning the changes made, and finally a git push to push the files onto the repo. 

## Usage 

If you want to use this program, first do a git clone as previously described. Once you have the folder in your vs code then open the integrated terminal by right clicking on the index.js and running the command, node index.js . This will start the program running, follow the prompts and you will have a team profile generated. The following section has a demonstartion video.

## Finished project
 If you would like a demo of this program, visit https://youtu.be/uTOiH5YuPFk

<img src="./main/images/team-profile-screenshot.png" alt="screenshot of completed team profile web page">

## Features
<ul>
<li>A user can use this program to easily to generate a team profile that is nicey laid out in an HTML file.</li>
<li>Uses a command line to accept the user input.</li>
<li>The user is prompted for team members and their information .</li>
<li>When the user is done entering all the info, a HTML is generated that displays a nicely formatted team roster based on the user input.</li>
<li>A user can click on the the email address and their default email program pops up and the TO: field is populated with the correct address.</li>
<li>When a user clicks on the github username then they are taken to the github profile in a new tab.</li>
<li>When the user starts the application they are prompted to enter the manager's name, employee ID, email address, and office number.</li>
<li>After entering the manager's information then the user is prompted to add an engineer or an intern. </li>
<li>When engineer is selected, the engineer's name, ID, email and Github username are enetered then the menu pops up again and the intern info can be entered. </li>
<li>If intern is selected, the intern's name, ID, email and school are entered then the menu pops up again and another employee can be selected if need be. </li>
<li>If no title or description is entered by the user they are then met with a prompt telling them to enter information, if no information is entered the program will not run.</li>
<li>If the user is done entering info they click on that option and a HTML is generated.</li>
<li>This program utilizes unit testing for every employee, using the Jest dependency to ensure working code.</li>
<li>This program uses the inquirer dependency to prompt the user and collect the info so it can be appended to the page using template literals.</li>
</ul>

## Tests
Unit testing is done on this application using the Jest dependency. To use the Jest dependency, first you must have node installed on your device. Once that is done the user can go into the integrated terminal and run npm init -y on their command line. That will install packages.json. From there run npm install to install the node modules. Next run the command npm install --save-dev jest to install the jest dependency. Once you have that saved as a dev-dependency in your package.json the user is ready to run tests on this program. To run the test, run the command npm run test in the command line. 

## Credits
N/A

## Contributing

Pull requests are welcome and encouraged. Hit me up on my github <a href="https://github.com/mattrward1030">mattrward1030</a>

## Badges
 <img src="https://shields.io/badge/license-MIT-green" alt="mit license badge">

## License

MIT License

Copyright (c) [2021] [Matthew Ward]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
