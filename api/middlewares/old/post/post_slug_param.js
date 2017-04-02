import mongoose from 'mongoose'

const postSlugParam = function (req, res, next, postSlug) {
  //console.log('validating ' + id + ' exists');
  //find the ID in the Database
  mongoose.model('Post').findBySlug(postSlug, (err, post) => {
    //if it isn't found, we are going to repond with 404
    if (err) {
      console.log(`${postSlug} was not found`)

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
      req.postSlug = postSlug
      // go to the next thing
      next()
    } 
  })
}

export default postSlugParam