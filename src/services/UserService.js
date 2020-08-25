const  config  = require("./config");



const UserService = {
  url: 'http://localhost:8080',

  //something endpoints
  createUser(name, owner, desc, hidden){
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
    return fetch('http://localhost:8080/user', postOptions)
    .then(res => {

    })
  },
  
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

export default UserService;
