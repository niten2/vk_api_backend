const checkRequiredEnv = (envs: string[]): void => {
  envs.map((env) => {
    if (!process.env[env]) {
      throw new Error(`process.env.${env} should be exist`)
    }
  })
}

checkRequiredEnv([
  "REACT_APP_BACKEND_URL",
  "REACT_APP_AUTH_SESSION_STORAGE_KEY",
  "REACT_APP_WS_URL",
])

interface Settings {
  readonly env: string
  readonly public_url: string
  readonly backend_url: string
  readonly ws_url: string
  readonly auth_session_storage_key: string
  readonly auth_session_storage_key_role: string
}

const settings: Settings = {
  env: process.env.NODE_ENV || "development",
  public_url: process.env.PUBLIC_URL || "",
  backend_url: process.env.REACT_APP_BACKEND_URL || "",
  ws_url: process.env.REACT_APP_WS_URL || "",

  auth_session_storage_key: process.env.REACT_APP_AUTH_SESSION_STORAGE_KEY || "",
  auth_session_storage_key_role: `${process.env.REACT_APP_AUTH_SESSION_STORAGE_KEY}_role`,
}

export default settings
