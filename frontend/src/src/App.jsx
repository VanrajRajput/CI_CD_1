import { useState } from 'react';
import FetchData from './FetchData';

function App() {
  const [name, setName] = useState("");

  const addName = async () => {
    await fetch(`http://localhost:8000/add?name=${name}`, { method: "POST" });
    setName("");
    alert("Name added!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Name Input</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addName}>Add</button>
      <a href="/fetch-data"><button>Fetch Data</button></a>
    </div>
  );
}

export default App;
