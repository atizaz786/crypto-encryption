import React from 'react';
import './App.css';
import { Tabs } from 'antd';
import Encrypter from './pages/encrypter';
import Decrypter from './pages/decrypter';
import HowToUse from './pages/HowToUse';


const items = [
  {
    key: '1',
    label: `How To Use?`,
    children: <HowToUse/>,
  },
  {
    key: '2',
    label: `Encrypt`,
    children: <Encrypter />,
  },
  {
    key: '3',
    label: `Decrypt`,
    children: <Decrypter />,
  },
  
  
];

function App() {
  return (
    <div className="App" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Tabs defaultActiveKey="1" items={items} centered />
  </div>
  );
}

export default App;


