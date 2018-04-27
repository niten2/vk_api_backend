export const authenticated = (fn) => (parent, args, context, info) => {
  if (context.payload && context.payload.user_id) {
    return fn(parent, args, context, info);
  }
  throw new Error('User is not authenticated')
}
