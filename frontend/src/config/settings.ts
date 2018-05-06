interface Settings {
  readonly env: string
  readonly public_url: string
  readonly backend_url: string
  readonly auth_session_storage_key: string
  readonly auth_session_storage_key_role: string
}

if (!process.env.REACT_APP_BACKEND_URL) {
  throw new Error("REACT_APP_BACKEND_URL should be exist")
}

if (!process.env.REACT_APP_AUTH_SESSION_STORAGE_KEY) {
  throw new Error("REACT_APP_AUTH_SESSION_STORAGE_KEY should be exist")
}

const settings: Settings = {
  env: process.env.NODE_ENV || "development",
  public_url: process.env.PUBLIC_URL || "",
  backend_url: process.env.REACT_APP_BACKEND_URL || "",
  auth_session_storage_key: process.env.REACT_APP_AUTH_SESSION_STORAGE_KEY || "",
  auth_session_storage_key_role: `${process.env.REACT_APP_AUTH_SESSION_STORAGE_KEY}_role`,

}

export default settings
