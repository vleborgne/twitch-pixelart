WARNING : QUICK AND DIRTY PROJECT, TO BE IMPROVED IF YOU LIKE IT

# Intro
This minimalist project displays a grid in the browser. You can showcase it on Twitch and allow your users to interact with it using the following commands:
``pixel {x}:{y} {color}``

Where {x} is the column number starting from the left at 1, {y} is the line number starting from the top at 1, and {color} can be one of the following:
`` ['red', 'blue', 'yellow', 'green', 'white', 'grey', 'black', 'chartreuse', 'chocolate', 'coral', 'fuchsia']``

For example, if a user types "pixel 4:10 chartreuse" in the Twitch chat, the pixel at the 4th column and 10th line will change its color to chartreuse.

# Installation

- Install npm
- type "npm install" in a terminal

In the file src/App.tsx change
``
// Your target chanel (usually the usermname)
const CHANNEL = '#xxx';  // Replace with your channel, starts with #
// Your account
const ACCOUNT = 'twitch_pixelart';   // Replace with the account the bot runs as
// Password can be generated here https://twitchapps.com/tmi/
const PASSWORD = 'oauth:xxx';
``

You can also configure the number of cells and the size in pixel of a cell

``
// Size of the grid
export const NBR_OF_LINE = 100;
// Size in pixel of one cell
export const CELL_SIZE = 7;
``