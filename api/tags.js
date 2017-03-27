import { AsyncRouter } from 'express-async-router'

export default (context) => {

	const api = AsyncRouter()

  api.get('/', context.resourses.Tags.index)
  api.post('/', context.resourses.Tags.create)
  api.get('/:id', context.resourses.Tags.show)
  api.put('/:id', context.resourses.Tags.update)
  api.delete('/:id', context.resourses.Tags.destroy)

	return api
}
