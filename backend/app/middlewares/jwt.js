// import jwt from 'jsonwebtoken'

// export default isAuthenticated(req, res, next) => {
//   var token = req.body.token || req.query.token || req.headers['token'];

//   if (token) {
//     jwt.verify(token, 'secret', function(err, decoded) {
//       if (err) {
//         return res.status(401).send({
//           success: false,
//           error: 'Failed to authenticate token or expiried at overdue'
//         })
//       } else {
//         req.decoded = decoded
//         next()
//       }
//     })

//   } else {

//     return res.status(401).send({
//       success: false,
//       error: 'No token provided.'
//     })

//   }
// }
