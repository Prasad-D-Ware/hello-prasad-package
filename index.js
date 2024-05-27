#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
  const message =
    "Hey there! I'm Prasad, a Computer Science Student. Currently learning Full Stack Development";
  const twitterLink = "https://twitter.com/prasadtwts";
  const linkedinLink = "https://www.linkedin.com/in/prasad-ware/";
  const githubLink = "https://github.com/Prasad-D-Ware";

  // Determine the maximum length of the content inside the box
  const maxLength = Math.max(
    message.length,
    twitterLink.length,
    linkedinLink.length,
    githubLink.length
  );

  // Function to pad strings with spaces to the right to match the maxLength
  const padRight = (str, length) => str + " ".repeat(length - str.length);

  // Create a colorful box using ANSI escape codes
  const colorfulBox = `  \x1b[38;5;51m+${"-".repeat(maxLength + 4)}+
    | \x1b[38;5;105m${padRight(message, maxLength)} \x1b[38;5;51m |
    +${"-".repeat(maxLength + 4)}+
    | \x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${padRight(
      twitterLink,
      maxLength - 8
    )} \x1b[38;5;51m |
    | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${padRight(
      linkedinLink,
      maxLength - 9
    )} \x1b[38;5;51m |
    | \x1b[38;5;93mGithub :\x1b[0m \x1b[38;5;39m${padRight(
      githubLink,
      maxLength - 8
    )} \x1b[38;5;51m |
    +${"-".repeat(maxLength + 4)}+\x1b[0m`;

  // Log the colorful box in the terminal
  console.log(colorfulBox);
}
// Call the function to log your details
logDetails();
