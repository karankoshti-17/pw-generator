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
      <div className="mainBody h-[100vh] w-[100vw]  flex justify-center items-center bg-clip-border shadow-md">
        <div className="w-[600px] h-auto bg-blue-200 p-5 rounded-2xl flex justify-center items-center flex-col ">
          <h1 className="text-3xl text-center font-bold pt-[30px] pb-[50px]">
            Password Generator
          </h1>
          <div></div>
          <div className="flex flex-col gap-[20px] justify-center w-full h-auto max-w-[20rem] w-[20rem]flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-5">
            <h3 className="text-[20px] text-bold text-center">
              Range Of Password
            </h3>
            <input
              className="w-[250px]"
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

          {/* /////////////////////////// */}
          <div class="flex justify-center w-full max-w-[20rem] w-[20rem]flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <nav class="flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
              <div
                role="button"
                class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <label
                  htmlFor="horizontal-list-react"
                  class="flex items-center w-full px-3 py-2 cursor-pointer"
                >
                  <div class="grid mr-3 place-items-center">
                    <div class="inline-flex items-center">
                      <label
                        class="relative flex items-center p-0 rounded-full cursor-pointer"
                        htmlFor="horizontal-list-react"
                      >
                        <input
                          id="horizontal-list-react"
                          type="checkbox"
                          onChange={() => {
                            setNumbers((prevState) => !prevState);
                          }}
                          value={numbers}
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                        />
                        <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </label>
                    </div>
                  </div>
                  <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    Numbers
                  </p>
                </label>
              </div>
              <div
                role="button"
                class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <label
                  htmlFor="horizontal-list-vue"
                  class="flex items-center w-full px-3 py-2 cursor-pointer"
                >
                  <div class="grid mr-3 place-items-center">
                    <div class="inline-flex items-center">
                      <label
                        class="relative flex items-center p-0 rounded-full cursor-pointer"
                        htmlFor="horizontal-list-vue"
                      >
                        <input
                          id="horizontal-list-vue"
                          value={characters}
                          onChange={() => {
                            setCharacters((prevState) => !prevState);
                          }}
                          type="checkbox"
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                        />
                        <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </label>
                    </div>
                  </div>
                  <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    Characters
                  </p>
                </label>
              </div>
            </nav>
          </div>
          {/* /////////////////////////// */}

          <h3 className="text-[20px] text-bold text-center pt-[40px] pb-[20px]">
            Generated Password
          </h3>
          <input
            className="p-2 rounded-[10px] w-[500px]"
            type="text"
            placeholder="password"
            value={password}
            readOnly
          />
          <br></br>
        </div>
      </div>
    </>
  );
}

export default App;
