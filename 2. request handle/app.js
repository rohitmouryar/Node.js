// core module ko import karne ke liye
const http = require('http'); 

// function requestListener(req, res) {
//   console.log(req);  
// }

// http.createServer(requestListener);


const server = http.createServer((req, res) => {

  // send request 
  console.log(req.url, req.method, req.headers);  

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  
  res.write('</html>')

}); 

const PORT = 3002; 
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});

