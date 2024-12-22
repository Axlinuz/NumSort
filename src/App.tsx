import React, { useState } from "react";
import './App.css'

const App = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  const [input, setInput] = useState<string>("");
  const [sortedNum, setSortNum] = useState<number[]>([]); // Initialize as an empty array

  const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Convert input into an array of numbers
    const numberArray = input
      .split(",")
      .map((num) => parseFloat(num.trim()))
      .filter((num) => !isNaN(num));

    // Sort the array
    const sorted = [...numberArray].sort((a, b) =>
      selectedOption === "option1" ? a - b : b - a
    );

    setSortNum(sorted); // Update state
    console.log("Sorted Array:", sorted); // Log the sorted array directly
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" w-1/2 flex justify-center items-center flex-col border-2 border-black rounded-md">
        <input
          className="m-5 border-2 border-black p-5"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Removed unnecessary console.log
          placeholder="Enter numbers separated by commas (e.g., 1, 2, 3)"
        />
        <label className="m-5">Select a Method:</label>
        <select value={selectedOption} onChange={handleChangeOption} className="rounded-md w-[80%]">
          <option value="option1">Ascending</option>
          <option value="option2">Descending</option>
        </select>
        <button type="submit" className="m-5 border-2 border-black rounded-md hover:rounded-none w-[80%]">Sort</button>
      </form>

      {sortedNum.length > 0 && (
        <p>Sorted Numbers: {sortedNum.join(", ")}</p> // Safely access sortedNum
      )}
    </>
  );
};

export default App;
