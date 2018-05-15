let jwt = require('jsonwebtoken');

module.exports = tokenVerify = (token, callback) => {
  let username = ''
  jwt.verify(token, "LISHAOSHIYIGEHAOBAOBAO", (err, decode) => {
    if (err) {
      res.json({
        code: 200,
        data: {
          flag_l: false,
          message: 'token过期'
        }
      });
      return false
    } else {
      console.log(decode)
      username = decode.user
    }
  })
  return username;
}
