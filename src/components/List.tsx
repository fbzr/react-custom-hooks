import { useFetch } from '../hooks/useFetch';
import { usePagination } from './Pagination/usePagination';

const List = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts/'
  );

  // const [currentItems, Pagination] = usePagination(data ?? []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div>
      <h1>List</h1>

      {data &&
        Array.isArray(data) &&
        (data.length ? data.map((item) => <li>{item.title}</li>) : 'no data')}

      {/* {currentItems && (
        <ul>
          {currentItems.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      )}

      {Pagination} */}
    </div>
  );
};

export default List;
