import React from 'react';
import './index.css';
import Header from '@components/Header';
import Container from '@components/Container';



function App() {
  return (
    <div className="bg-veryDarkBlueTopBGPattern dark:bg-veryDarkBlueBG min-h-screen flex items-center justify-center">
      <div className="container border max-w-5xl p-10">
      
<Header></Header>
<Container></Container>

      </div>
  
      
    </div>
  );
}

export default App
