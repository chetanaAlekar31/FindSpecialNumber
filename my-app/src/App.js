import React, { useState } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(false);

  const findSpecialNumbers = () => {
    setLoading(true);
    const result = [];

    for (let i = 1; i <= 10000; i++) {
      let valid = true;
      for (let n = 3; n <= 10; n++) {
        if (i % n !== n - 1) {
          valid = false;
          break;
        }
      }
      if (valid) result.push(i);
    }

    setNumbers(result);
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Find Special Numbers</h2>
      {/* <p>Condition: x % N === N - 1 (for N = 3 to 10)</p> */}

      <button className="btn" onClick={findSpecialNumbers} disabled={loading}>
        {loading ? "Checking..." : "Find Numbers"}
      </button>

      <div className="results">
        {numbers.length > 0 ? (
          <ol>
            {numbers.map((num) => (
              <li key={num}>{num}</li>
            ))}
          </ol>
        ) : (
          !loading && <p className="no-results">No numbers found yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
