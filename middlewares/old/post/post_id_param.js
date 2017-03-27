import mongoose from 'mongoose'

const postIdParam = function (req, res, next, id) {
  //console.log('validating ' + id + ' exists');
  //find the ID in the Database
  mongoose.model('Post').findById(id, (err, post) => {
    //if it isn't found, we are going to repond with 404
    if (err) {
      console.log(`${id} was not found`)

      res.status(404)
      var err = new Error('Not Found')
      err.status = 404
      res.format({
        html() { next(err) },
        json() { res.json({ message: `${err.status} ${err}` }) }
      });

    } else {
      //uncomment this next line if you want to see every JSON document response for every GET/PUT/DELETE call
      //console.log(post);
      // once validation is done save the new item in the req
      req.id = id
      // go to the next thing
      next()
    } 
  })
}

export default postIdParam