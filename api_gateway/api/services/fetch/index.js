import { createApolloFetch } from 'apollo-fetch'
import settings from 'config/settings'

export const CrmFetch = createApolloFetch({ uri: settings.crmUri })
export const VkFetch = createApolloFetch({ uri: settings.vkUri })
export const InstaFetch = createApolloFetch({ uri: settings.instaUri })

