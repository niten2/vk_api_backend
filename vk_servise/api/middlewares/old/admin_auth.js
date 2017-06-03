import config from '../config'
import basicAuth from 'basic-auth-connect'

export default function() {
	return basicAuth(config.admin_login, config.admin_password)
}()