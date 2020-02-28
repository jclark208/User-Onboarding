import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'









function App() {
  const [scumbags,setScumbags] = useState([]);
  function insideOfApp(scumbag) {
      setScumbags([...scumbags,scumbag]);
      console.log(scumbags);
  };
  return (
    <>
    <Form insideOfApp={insideOfApp}/>
    {scumbags.map(scumbag =>{
      return <p key={scumbag.id}>{scumbag.name}</p>
    })}
    </>
  );
}

export default App;
