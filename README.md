# SVG Logo Maker

## Description

This project was aimed to create a svg logo generator. A command line application was created to allow users to input to answers that they are presented and these answers are then used to generate the appropriate SVG logo.  

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


## Usage 

* Run node index.js in the terminal
* Input the answers to the question that coincide with the following sections:  shape, shapeColor, text, textColor
* If more than 3 characters are entered for the 'text' question, the following message will be shown to the user "Please enter no more than 3 characters"
* Once all the questions have been answered, a file with the name 'logo.svg' will be generated displaying the characteristics that coincide with the user input.
* Within the file, the user will then be shown a 300x200 pixel image that matches the user input.
* To test ensure correctness of the code, run 'npm test' in the command line and Jest will run these tests. 


## Images 

**npm test results** 

The following image shows the outcome of the tests that were run by using Jest and typing 'npm test' in the command line.

<img width="773" alt="npm test" src="https://github.com/e-aji/week-10-svg-logo-maker/assets/156595423/780342c3-6d7d-4290-9497-0a73953c090f">


<br> 

**Screenshot of Generated SVG Logo** 

The following image shows the SVG logo that was generated after the user responses have been inputted for the questions.  

![Screenshot of Generated SVG Logo](https://github.com/e-aji/week-10-svg-logo-maker/assets/156595423/ee3d4801-3833-4007-a349-d038385e7868)


## Link 


Link to video demonstration - https://www.youtube.com/watch?v=4Kfwy8VUllU 



