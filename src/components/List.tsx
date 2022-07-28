import { useFetch } from '../hooks/useFetch';

const List = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts/'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Fatal Error!</p>;

  return (
    <div>
      <h1>List</h1>

      {data &&
        Array.isArray(data) &&
        (data.length
          ? data.map((item, index) => (
              <li key={[item.title, index].join('-')}>{item.title}</li>
            ))
          : 'no data')}
    </div>
  );
};

export default List;
