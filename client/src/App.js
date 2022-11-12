import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [instanceContent, setInstanceContent] = useState([]);

  useEffect(() => {
    getInstanceContent();
  }, [])

  const getInstanceContent = async () => {
    const arrayOfInstanceContent = await axios.get('/api/instancecontent');
    const arrayOfFilteredInstanceContent = arrayOfInstanceContent.data.filter(dungeon => dungeon.name && dungeon.required_level);
    const arrayOfInstanceContentNames = arrayOfFilteredInstanceContent.map ((dungeon) => {
      return <p>{dungeon.name} Level: {dungeon.required_level}</p>;
    });
    setInstanceContent(arrayOfInstanceContentNames);
  }

  return (
    <div className="App">
      <h1>FFXIV Dungeons</h1>
      {instanceContent}
    </div>
  );
}

export default App;
