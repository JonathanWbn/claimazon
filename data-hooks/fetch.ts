import axios, { AxiosError } from 'axios'
import useSWR, { responseInterface } from 'swr'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

type FetchResponse<T> = { isLoading: boolean } & Pick<
  responseInterface<T, AxiosError>,
  'data' | 'error'
>

export function useFetch<T>(apiEndpoint: string): FetchResponse<T> {
  const { data, error } = useSWR<T, AxiosError>(apiEndpoint, fetcher)

  const isLoading = !data && !error

  return { isLoading, data, error }
}
