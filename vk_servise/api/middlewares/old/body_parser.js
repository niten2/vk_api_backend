import bodyParser from 'body-parser' // parses information from POST

export default function() {
	return bodyParser.urlencoded({ extended: true })
}()
