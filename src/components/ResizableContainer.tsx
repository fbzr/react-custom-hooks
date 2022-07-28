import { useRef } from 'react';
import { useResizeObservable } from '../hooks/useResizeObservable';

const ResizableContainer = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const { width, height } = useResizeObservable(elementRef);

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: 'lightblue',
        resize: 'both',
        overflow: 'auto',
        margin: 'auto',
      }}
    >
      <h2>Resizable Container</h2>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default ResizableContainer;
