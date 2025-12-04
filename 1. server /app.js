// core module ko import karne ke liye
const http = require('http'); 

// function requestListener(req, res) {
//   console.log(req);  
// }

// http.createServer(requestListener);


const server = http.createServer((req, res) => {
  console.log(req);  
});

const PORT = 3002; 
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});

