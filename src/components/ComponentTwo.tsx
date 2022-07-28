import { useWindowSize } from '../hooks/useWindowSize';

const ComponentTwo = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>ComponentTwo</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default ComponentTwo;
