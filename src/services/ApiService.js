const  config  = require("./config");


const ApiService = {
  url: 'http://localhost:8080',
  //something endpoints
  test(username, password){
    const postOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        'name': name,
        'owner': owner,
        'desc' : desc,
        'hidden': hidden
      }
    };
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
