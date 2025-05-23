# Gulp
Instructions
1. Install Gulp
Open the terminal and follow these steps:
Install Gulp CLI globally:
npm install -g gulp-cli
Install Gulp and Gulp Shell locally:
npm install gulp gulp-shell --save-dev
2. Create a Gulp Task
Create a gulpfile.js in your project root.
Add the following:
Import Gulp and Gulp Shell:
const gulp = require("gulp");
const shell = require("gulp-shell");
Define a Gulp task for running tests:
gulp.task("unit test", shell.task("mocha"));
3. Run Gulp
In the terminal, run the following command:
gulp "unit test"
