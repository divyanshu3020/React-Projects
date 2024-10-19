import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col  gap-6 justify-center px-2">
          <div className="flex flex-col bg-white px-1 py-2 rounded-2xl">
            <button
              className="outline-none mr-2 ml-2 px-4 mt-2 py-1 mb-4 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>

            <button
              className="outline-none px-4 ml-2 mt-2 py-1 mb-4 rounded-2xl mr-2 text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button
              className="outline-none mr-2 ml-2 px-4 mb-4  mt-2 py-1 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>

            <button
              className="outline-none mr-2 ml-2 px-4 py-1 mb-4 mt-2 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
