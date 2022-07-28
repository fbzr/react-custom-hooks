import { useLocalStorage } from '../hooks/useLocalStorage';

const LocalStorageInput = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default LocalStorageInput;
