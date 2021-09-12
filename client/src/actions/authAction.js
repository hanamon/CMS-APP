export const UPDATE_ACCESS_TOKEN = "UPDATE_ACCESS_TOKEN";

export const updateAccessToken = (accessToken) => {
  return {
    type: UPDATE_ACCESS_TOKEN,
    payload: { accessToken }
  }
}
