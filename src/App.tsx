import { useState } from 'react';
import styled from 'styled-components';

import { Button } from './components/UI';

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    console.log(`clickked button. Count shall be `, count + 1);
    setCount((count) => count + 1);
  };

  return (
    <>
      <MainContainer>
        <h1>Simple React app (made with Vite)</h1>
        <Button title="I Work" onClick={onButtonClick} />
        <p>Button worked {count} times</p>
      </MainContainer>
    </>
  );
}

export default App;
