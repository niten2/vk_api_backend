import { AsyncRouter } from 'express-async-router'

export default (context) => {

	const api = AsyncRouter()

  api.get('/', context.resourses.Groups.index)
  api.post('/', context.resourses.Groups.create)
  api.get('/:id', context.resourses.Groups.show)
  api.put('/:id', context.resourses.Groups.update)
  api.delete('/:id', context.resourses.Groups.destroy)

	return api
}
