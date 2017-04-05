node_modules/.bin/sequelize migration:create

node_modules/.bin/sequelize db:migrate


node_modules/.bin/sequelize db:migrate:old_schema
node_modules/.bin/sequelize db:migrate:undo


node_modules/.bin/sequelize db:migrate:undo:all

node_modules/.bin/sequelize db:seed:create
node_modules/.bin/sequelize seed:generate


node_modules/.bin/sequelize db:seed:undo

node_modules/.bin/sequelize db:seed:undo:all

node_modules/.bin/sequelize help:db:seed


node_modules/.bin/sequelize --require ./babelhook db:seed:all

// ---

node_modules/.bin/sequelize migration:create
node_modules/.bin/sequelize db:seed:create

node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all


node_modules/.bin/sequelize help:migration:create




db:migrate: "node_modules/.bin/sequelize db:migrate --migrations-path=db/migrations"
db:migration "node_modules/.bin/sequelize migration:create --migrations-path=db/migrations"
db:seed "node_modules/.bin/sequelize db:seed:all --seeders-path=db/seeders"
db:drob "rm -rf db/database.dev.sqlite"



rm -


sequelize help:<task-name>


npm install -g node-inspector@0.7.4
https://www.npmjs.com/package/node-inspector

