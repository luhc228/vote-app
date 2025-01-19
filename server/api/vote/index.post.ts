import { Vote as VoteSchema } from '../../models/vote.schema'

interface Body {
  id: string
  optionIndex: number
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event) as Body
  try {
    const voteDbId = `votes.${body.optionIndex}`
    return await VoteSchema.updateOne(
      { _id: body.id },
      { $inc: { [voteDbId]: 1 } }
    )
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: (error as Error).message
    })
  }
})
