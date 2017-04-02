// used to manipulate POST
import methodOverride from 'method-override'

const _methodOverride = function (req, res) {
	return methodOverride((req, res) => {
		if (req.body && typeof req.body === 'object' && '_method' in req.body) {
	    // look in urlencoded POST bodies and delete it
	    var method = req.body._method
	    delete req.body._method
	    return method
	   }
	})
}

export default _methodOverride()
