import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
      <Link to="/fetch-data"><button>Fetch Data</button></Link>
    </div>
  );
}

export default Home;
