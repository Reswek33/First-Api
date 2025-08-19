const http = require('http');
const port = 3000;


const quotes = [
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats"
  }
]

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  res.end(JSON.stringify({
    success: true,
    count: quotes.length,
    data: quotes
  }));
});
  



server.listen(port, function(error){
  if (error) {
    console.error('Error starting server:', error);
  } else {
    console.log('Server is running on port ' + port);
  }
})