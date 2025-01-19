import { Vote as VoteSchema } from '../../models/vote.schema'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  if (!query.id) {
    throw createError({
      statusCode: 400, // TODO: use another status code?
      statusMessage: 'vote ID not found.', // TODO: optimize message
    }) 
  }
  return await VoteSchema.findOne({
    _id: query?.id,
  })
})
