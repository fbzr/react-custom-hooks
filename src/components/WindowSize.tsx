import { useWindowSize } from '../hooks/useWindowSize';

const WindowSize = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>WindowSize</h1>

      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default WindowSize;
