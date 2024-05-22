import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [range, setRange] = useState("8");
  let [numbers, setNumbers] = useState(false);
  let [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*";

    for (let i = 0; i < range; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [range, numbers, characters]);

  return (
    <>
      <div className="mainBody h-[100vh] w-[100vw] bg-red-300 flex justify-center items-center">
        <div className="w-[500px] h-[300px] bg-blue-200 p-5 rounded-2xl flex flex-col ">
          <h1 className="text-3xl text-center font-bold ">
            Password Generator
          </h1>
          <div className="flex justify-center gap-[20px]">
            <label for="range">Range</label>
            <input
              id="range"
              type="range"
              min="8"
              max="20"
              name="range"
              value={range}
              onChange={(e) => {
                setRange(e.target.value);
              }}
            />
          </div>
          <br></br>
          <div>
            <input
              type="checkbox"
              name="numbers"
              onChange={() => {
                setNumbers((prevState) => !prevState);
              }}
              value={numbers}
            />
            <label htmlFor="input"> numbers</label>
          </div>
          <br></br>
          <div>
            <input
              type="checkbox"
              name="numbers"
              value={characters}
              onChange={() => {
                setCharacters((prevState) => !prevState);
              }}
            />
            <label htmlFor="input"> characters</label>
          </div>
          <br></br>
          <input type="text" placeholder="password" value={password} readOnly />
          <br></br>
        </div>
      </div>
    </>
  );
}

export default App;
