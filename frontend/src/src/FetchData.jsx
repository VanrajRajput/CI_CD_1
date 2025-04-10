import { useEffect, useState } from 'react';

function FetchData() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/fetch")
      .then(res => res.json())
      .then(data => setNames(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Names</h2>
      <ul>
        {names.map((n) => <li key={n.id}>{n.name}</li>)}
      </ul>
    </div>
  );
}

export default FetchData;
