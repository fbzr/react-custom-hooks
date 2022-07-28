import { useState } from 'react';
import { useWindowSize } from './hooks/useWindowSize';
import WindowSize from './components/WindowSize';
import ResizableContainer from './components/ResizableContainer';
import List from './components/List';
import './App.css';
import CurrentBreakpoint from './components/CurrentBreakpoint';

function App() {
  return (
    <div className="App">
      <WindowSize />
      <CurrentBreakpoint />

      <ResizableContainer />

      <List />
    </div>
  );
}

export default App;
