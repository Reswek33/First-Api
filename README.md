# First-Api

A simple Node.js HTTP server that serves random inspirational quotes.

Features
Returns a JSON response with 3 inspirational quotes

Includes quote text and author information

Simple and lightweight implementation

Installation
Make sure you have Node.js installed

Clone this repository or copy the code

Install dependencies (none required for this basic example)

Usage
Start the server:

bash
node server.js
The server will run on port 3000 by default

Make a GET request to:

text
http://localhost:3000/
Example Response
json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "quote": "The only limit to our realization of tomorrow is our doubts of today.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams.",
      "author": "Eleanor Roosevelt"
    },
    {
      "quote": "Do not wait to strike till the iron is hot, but make it hot by striking.",
      "author": "William Butler Yeats"
    }
  ]
}
Configuration
You can change the port by modifying the port constant in server.js.
