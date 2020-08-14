const  config  = require("./config");


const ApiService = {
  url: 'http://localhost:8080',
  //something endpoints
  test(){
    return fetch(this.url , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'aaplication/json'
      }
    })
    .then(res => res.text())
  }
  

};

export default ApiService;
