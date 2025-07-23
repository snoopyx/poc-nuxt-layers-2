interface ChuckNorrisJoke {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

export const useChuckNorrisJoke = () => {
  const { data: joke, pending, error, refresh } = useFetch<ChuckNorrisJoke>('https://api.chucknorris.io/jokes/random')

  return {
    joke,
    pending,
    error,
    refresh
  }
}
