import React from 'react';
import './index.css';
import Header from '@components/Header';
import Container from '@components/Container';
import SecondContainer from '@components/SecondContainer';



function App() {
  return (
    <div className="bg-veryDarkBlueTopBGPattern dark:bg-veryDarkBlueBG min-h-screen flex items-center justify-center">
      <div className="container max-w-5xl p-10">
      
<Header></Header>
<Container></Container>
<SecondContainer></SecondContainer>

      </div>
  
      
    </div>
  );
}

export default App
