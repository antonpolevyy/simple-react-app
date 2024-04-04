import { useState } from 'react';

import { Button } from './components/UI';

function App() {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    console.log(`clickked button. Count shall be `, count + 1);
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>Simple React app (made with Vite)</h1>
      <Button title="I Work" onClick={onButtonClick} />
      <p>Button worked {count} times</p>
    </>
  );
}

export default App;
