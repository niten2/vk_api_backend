export default (params) => ([
  (req, res, next) => {
    if (req.header('user_id')) {
      req.user_id = req.header('user_id')
    }
    next()
  }
])
