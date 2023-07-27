import React, { useState } from 'react';
import './App.css';

function App() {
  const [food1, setFood1] = useState('');
  const [food2, setFood2] = useState('');
  const [comparisonResult, setComparisonResult] = useState(null);

  const handleComparison = () => {
    // Perform comparison logic here (e.g., API calls, data processing)
    // For simplicity, let's assume we have a pre-defined comparisonResult object

    const mockComparisonResult = {
      texture: 'Both are soft and chewy',
      odor: 'Food 1 has a stronger aroma',
      flavour: 'Food 2 is spicier',
      ingredients: 'Food 1 contains nuts, while Food 2 does not',
      cookingMethods: 'Both are fried',
    };

    setComparisonResult(mockComparisonResult);
  };

  return (
    <div className="App">
      <h1>Food Comparison App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Food 1"
          value={food1}
          onChange={(e) => setFood1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Food 2"
          value={food2}
          onChange={(e) => setFood2(e.target.value)}
        />
        <button onClick={handleComparison}>Compare</button>
      </div>
      {comparisonResult && (
        <div>
          <h2>Comparison Result</h2>
          <p>Texture: {comparisonResult.texture}</p>
          <p>Odor: {comparisonResult.odor}</p>
          <p>Flavour: {comparisonResult.flavour}</p>
          <p>Ingredients: {comparisonResult.ingredients}</p>
          <p>Cooking Methods: {comparisonResult.cookingMethods}</p>
        </div>
      )}
    </div>
  );
}

export default App;
