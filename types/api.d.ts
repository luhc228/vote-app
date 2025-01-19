declare module API {
  interface Vote {
    _id: string
    title: string
    options: string[]
    votes: number[]
    active: boolean
  }
}