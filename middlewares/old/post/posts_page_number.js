import mongoose from 'mongoose'
import config from '../config'

const PostspostsPageNumber = function (req, res, next, postsPageNumber) {
  const postsPerPage = config.postsPerPage
  postsPageNumber = parseInt(postsPageNumber)

  mongoose.model('Post')
	  .where({ is_published: true })
	  .count((err, count) => {
	  	if (err) console.log(err)
	  	if (count < postsPerPage * (postsPageNumber - 1)) {
      	res.status(404)
      	var err = new Error('Not Found')
      	err.status = 404
	      
	      res.format({
	        html() { next(err) },
	        json() { res.json({ message: `${err.status} ${err}` }) }
	      })

	  	} else {
	  		req.postsPageNumber = postsPageNumber
	      next()
	  	}
	  })
}

export default PostspostsPageNumber