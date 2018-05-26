import settings from 'src/config/settings'

xdescribe("", () => {
  it('should return valid values', () => {
    expect(settings).toEqual(
      expect.objectContaining({
        env: process.env.NODE_ENV,
        backend_url: process.env.REACT_APP_BACKEND_URL,
        auth_session_storage_key: process.env.REACT_APP_AUTH_SESSION_STORAGE_KEY,
      }),
    )
  })
})
