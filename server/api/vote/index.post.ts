import { Vote as VoteSchema } from '../../models/vote.schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    return await VoteSchema.findOneAndUpdate(
      { _id: body.id }, 
      { ...body, _id: body.id }, 
      { new: true },
    )
  }
  catch (error) {
    return error
  }
})
