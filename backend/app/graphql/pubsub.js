import { PubSub } from 'graphql-subscriptions'

const pubsub = new PubSub()

export const TEST_TOPIC = 'TEST_TOPIC'
export const SUBSCRIBE_TO_SET_INFO_VK_PERSONS = 'SUBSCRIBE_TO_SET_INFO_VK_PERSONS'

export default pubsub
