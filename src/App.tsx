import WindowSize from './components/WindowSize';
import ResizableContainer from './components/ResizableContainer';
import List from './components/List';
import ListPaginated from './components/ListPaginated';
import CurrentBreakpoint from './components/CurrentBreakpoint';
import ListAllFeatures from './components/ListAllFeatures';
import LocalStorageInput from './components/LocalStorageInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <WindowSize />
      {/* <CurrentBreakpoint />
      <ResizableContainer />
      <List />
      <ListAllFeatures />
      <ListPaginated />
      <LocalStorageInput /> */}
    </div>
  );
}

export default App;
