import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-80 cursor-pointer" style={{ backgroundColor: "red" }}>
            Red
          </button>

          <button onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-80 cursor-pointer" style={{ backgroundColor: "green" }}>
            Green
          </button>

          <button onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-80 cursor-pointer" style={{ backgroundColor: "blue" }}>
            Blue
          </button>

          <button onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-80 cursor-pointer" style={{ backgroundColor: "black" }}>
            Black
          </button>

          <button onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-80 cursor-pointer" style={{ backgroundColor: "orange" }}>
            Orange
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;


// we created a state variable color with initial value Olive
// created buttons for different colors
// on clicking a button the color state variable is updated to that color
// the background color of the div is set to the value of color state variable
// so when the color state variable is updated the background color changes accordingly
// used inline styling to set background color dynamically
// used Tailwind CSS classes for styling the buttons and layout
// used fixed positioning to keep the buttons at the bottom of the screen
// used flexbox for layout and spacing of buttons
// added hover effect to buttons for better user experience
// usestate hook from React to manage state
// setColor function to update the color state variable