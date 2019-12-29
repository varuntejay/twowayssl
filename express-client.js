const axios = require('axios')
const fs = require('fs')
const https = require('https')


const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    ca: fs.readFileSync('ca-crt.pem'),
    key: fs.readFileSync('client1-key.pem'),
    cert: fs.readFileSync('client1-crt.pem')    
  })
  
//   axios.get('https://localhost:8000/', {httpsAgent})
//   .then((response) => {
//       console.log(response)
//   })

  axios.get('https://localhost:8000/authenticate', { httpsAgent })
  .then((response) => {
      console.log(response)
  })
  