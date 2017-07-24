import Client from './client'
import Status from './status'

Status.hasMany(Client, {foreignKey: 'status_id' })
Client.belongsTo(Status, {foreignKey: 'status_id' })

export {
  Client,
  Status,
}
