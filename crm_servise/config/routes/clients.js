import { AsyncRouter } from 'express-async-router'
import ClientResource from "api/resourses/clients"

const api = AsyncRouter()

api.all('/', ClientResource.index)

export default api
