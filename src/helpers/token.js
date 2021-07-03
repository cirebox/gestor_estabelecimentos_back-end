var jwt = require('jsonwebtoken');

class Token {
    static create(data,type){
        const token = jwt.sign({type:type,data:data},process.env.SECRET);
        return token;
    }

    static check(token){
        const data = jwt.decode(token,process.env.SECRET);
        return data;
    }
}

module.exports = Token;
