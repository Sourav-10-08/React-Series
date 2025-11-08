// Importing necessary React hooks
import { useState, useCallback, useEffect, useRef } from "react";

function App() {

  // ------------------------ STATE VARIABLES ------------------------

  // Password length state (default = 8)
  const [length, setLength] = useState(8);

  // Checkbox state — allow numbers?
  const [numberAllowed, setNumberAllowed] = useState(false);

  // Checkbox state — allow special characters?
  const [charAllowed, setCharAllowed] = useState(false);

  // The generated password will be stored in this state
  const [password, setPassword] = useState("");

  // ------------------------ useRef ------------------------
  // useRef gives a direct reference to the <input> element
  // We will use this to select/copy the password
  const passwordRef = useRef(null);


  // ------------------------ PASSWORD GENERATION FUNCTION ------------------------
  const passwordGenerator = useCallback(() => {

    let pass = ""; // final password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // base characters

    // Add numbers if checkbox is ON
    if (numberAllowed) str += "0123456789";

    // Add special characters if checkbox is ON
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    // Loop to generate password character by character
    for (let i = 0; i < length; i++) {
      // Generate a random index inside available characters
      const charIndex = Math.floor(Math.random() * str.length);

      // Add that character to the password string
      pass += str.charAt(charIndex);
    }

    // Update password state (this will show the password on screen)
    setPassword(pass);

  }, [length, numberAllowed, charAllowed]); 
  // These values trigger re-creation of the function when changed


  // ------------------------ COPY TO CLIPBOARD ------------------------
  const copyPasswordToClipboard = useCallback(() => {

    // Select the text inside the input
    passwordRef.current?.select();

    // Mobile-safe selection (0 to 999)
    passwordRef.current?.setSelectionRange(0, 999);

    // Copy text to system clipboard
    window.navigator.clipboard.writeText(password);

  }, [password]); 
  // Only run again when password changes


  // ------------------------ useEffect ------------------------
  // Auto-generate password whenever length / options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);


  // ------------------------ JSX UI ------------------------
  return (

    // Outer container with Tailwind CSS styling
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      {/* Heading */}
      <h1 className="text-white text-center my-3">Password generator</h1>

      {/* Input + Copy Button Box */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">

        {/* Input showing the generated password */}
        <input
           type="text"
  value={password}
  className="outline-none w-full py-1 px-3 bg-white text-black"
  placeholder="Password"
  readOnly
  ref={passwordRef}
        />

        {/* Copy button */}
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>


      {/* Password length + options */}
      <div className="flex text-sm gap-x-2">


        {/* Length slider control */}
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(parseInt(e.target.value))} // update length
          />
          <label>Length: {length}</label>
        </div>


        {/* Checkbox: Allow numbers */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)} // toggle value
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>


        {/* Checkbox: Allow special characters */}
        <div className="flex items-center gap-x-1">
          <input
          
            type="checkbox"
            id="characterInput"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)} // toggle value
          />
          <label htmlFor="characterInput">Characters</label>
        </div>

      </div>

    </div>
  );
}

export default App;
