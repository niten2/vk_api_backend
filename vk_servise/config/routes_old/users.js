import { AsyncRouter } from 'express-async-router'

export default (context) => {

	const api = AsyncRouter()

  api.get('/', context.resourses.Users.index)
  api.post('/', context.resourses.Users.create)
  api.get('/:id', context.resourses.Users.show)
  api.put('/:id', context.resourses.Users.update)
  api.delete('/:id', context.resourses.Users.destroy)

	return api
}
