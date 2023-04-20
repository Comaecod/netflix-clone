import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const useMovie = (id?: string) => {
  const { data, error, isLoading } = useSWR(
    id ? `/api/movies/${id}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error, isLoading };
};

export default useMovie;
