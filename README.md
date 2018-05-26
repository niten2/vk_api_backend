# Smm Crm System
---

## Docker

### development
  - docker-compose up
  - frontend http://localhost:3000
  - backend http://localhost:3001

### production
- docker-compose -f docker-compose.production.yml build
- docker-compose -f docker-compose.production.yml up

### production job
- docker-compose -f docker-compose.production.job.yml build
- docker-compose -f docker-compose.production.job.yml up

### Backend
---

npm run start
npm run dev
npm run tests
npm run test

npm run db:migrate
npm run db:migrate:test
npm run db:migration
npm run db:seed

npm run db:drop
npm run db:drop:test

npm run db:reset
npm run db:reset:test

npm run vk:persons:check:friends
npm run vk:persons:add:friends

npm run jobs

# Frontend

- npm install
- cp .env.sample .env
- edit .env
- npm run start
- up backend app
- open http://localhost:3000

### Tests

##### fixtures react-cosmos
  - npm run cosmos
  - open http://localhost:8989

##### tests jest
  - npm run tests

### Deploy gh-pages
  - npm run deploy


# Vk

### Get token vk for example
https://oauth.vk.com/authorize?client_id=CLIENT_ID&scope=friends,photos,audio,video,docs,notes,pages,status,offers,questions,wall,groups,messages,email,notifications,stats,ads,offline,docs,pages,stats,notifications&response_type=token

### Get token vk for current app
https://oauth.vk.com/authorize?client_id=5815919&scope=friends,photos,audio,video,docs,notes,pages,status,offers,questions,wall,groups,messages,email,notifications,stats,ads,offline,docs,pages,stats,notifications&response_type=token
