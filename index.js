import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => { //endpoint to API (chain verb to app instance) - first argument is api, next is callback function. When URL is requested it will fire
  res.send('Hello World!') // this callback to handle the request. Function gives access to 2 different objects. req is incoming data, res is what we want to send back
})

app.listen(port, () => { //starts a server and listens on port 3000 for connections - callback part is optional, a functino that gets executed once app starts
  console.log(`Example app listening on port ${port}`) // listeneing to specified port
})