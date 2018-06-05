import Queue from "bull"
import settings from "config/settings"

export const vkPersonsQueue = new Queue("vkPersonsQueue", settings.redisUrl)

