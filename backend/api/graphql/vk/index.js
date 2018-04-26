import Users from './users'
import Tags from './tags'
import Groups from './groups'

export default function () {
  return {
    Users: Users(...arguments),
    Tags: Tags(...arguments),
    Groups: Groups(...arguments),
  }
}
