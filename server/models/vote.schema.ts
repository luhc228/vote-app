import { defineMongooseModel } from '#nuxt/mongoose'

export const Vote = defineMongooseModel({
  name: 'votes',
  schema: {
    title: {
      type: String,
      require: true,
    },
    options: {
      type: Array,
      require: true,
    },
    votes: {
      type: Array,
      require: true,
    },
  },
})