// import uuid from 'uuid'

// export default (context) => ([

//   (req, res, next) => {
//     if (context.settings.env == "production") {
//       req.reqId = uuid.v4()
//     } else {
//       global.reqId = 1 + (global.reqId || 0)
//       req.reqId = global.reqId
//     }

//     if (context.log) {
//       req.log = context.log.child({
//         reqId: req.reqId,
//       })
//     }
//     next()
//   },

// ])
