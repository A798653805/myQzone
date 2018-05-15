let jwt = require('jsonwebtoken');

module.exports = tokenVerify = (token, callback) => {
  let username = ''
  jwt.verify(token, "LISHAOSHIYIGEHAOBAOBAO", (err, decode) => {
    if (err) {
      console.log(err);
      username = '';
    } else {
      username = decode.user;
    }
  })
  return username;
}
