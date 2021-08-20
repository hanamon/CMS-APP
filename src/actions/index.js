export const REMOVE_FROM_USER = 'REMOVE_FROM_USER';

export const removeFromUser = (userId) => {
  return {
    type: REMOVE_FROM_USER,
    payload: {
      userId
    }
  }
}
