import { AsyncRouter } from 'express-async-router'
import WebDriver from 'api/resourses/web_driver'

const api = AsyncRouter()

api.put('/follow-explore', WebDriver.follow_explore)
api.put('/like-lenta', WebDriver.like_lenta)
// api.post('/', context.resourses.Users.create)
// api.get('/:id', context.resourses.Users.show)
// api.put('/:id', context.resourses.Users.update)
// api.delete('/:id', context.resourses.Users.destroy)

export default api
