const EventEmitter = require('events');


var url = 'https://www.google.com';

class Login extends EventEmitter {
    login(username, password){
        console.log('Logging in with username:', username, 'and password:', password);
        this.emit('cheese', username);
    }
}

module.exports = Login;