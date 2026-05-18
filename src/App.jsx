import React, { useState } from "react";

const App = () => {
  const [Title, setTitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  // Add Note
  const SubmitHandler = (e) => {
    e.preventDefault();

    if (Title.trim() === "" || details.trim() === "") {
      return;
    }

    const copyTask = [...task];
    copyTask.push({ Title, details });
    settask(copyTask);

    setTitle("");
    setdetails("");
  };

  // Delete Note
  const deleteNote = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    settask(copyTask);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* Navbar */}
      <nav className="bg-green-600 py-4 shadow-lg">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-black">
          Notes Application
        </h1>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row flex-1">
        
        {/* Form Section */}
        <form
          onSubmit={SubmitHandler}
          className="w-full lg:w-1/2 flex flex-col items-start gap-5 p-6 md:p-10"
        >
          <h1 className="text-green-500 font-bold text-3xl md:text-4xl">
            Add Notes
          </h1>

          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="w-full font-medium bg-gray-900 px-5 py-3 border-2 rounded border-green-600 outline-none text-sm md:text-base"
            value={Title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            placeholder="Enter Notes Details"
            className="h-40 md:h-52 w-full font-medium bg-gray-900 px-5 py-3 border-2 rounded border-green-600 outline-none text-sm md:text-base resize-none"
            value={details}
            onChange={(e) => {
              setdetails(e.target.value);
            }}
          ></textarea>

          <button className="w-full text-black bg-green-600 font-bold px-5 py-3 rounded cursor-pointer active:scale-95 hover:bg-green-500 transition">
            Add Note
          </button>
        </form>

        {/* Notes Section */}
        <div className="w-full lg:w-1/2 lg:border-l-2 border-green-600 p-6 md:p-10">
          <h1 className="text-green-500 text-3xl md:text-4xl font-bold">
            Recent Notes
          </h1>

          <div className="flex flex-wrap items-start justify-center lg:justify-start gap-5 mt-6 overflow-auto max-h-125">
            
            {task.length > 0 ? (
              task.map((element, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between flex-col w-full sm:w-60 h-60 bg-amber-100 text-black rounded-2xl pt-4 pb-4 px-4 shadow-lg"
                  >
                    <div className="overflow-auto">
                      <h1 className="text-xl font-bold leading-tight wrap-break-words">
                        {element.Title}
                      </h1>

                      <p className="text-sm mt-3 text-gray-700 font-medium wrap-break-words">
                        {element.details}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        deleteNote(index);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded font-medium cursor-pointer active:scale-95 transition"
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            ) : (
              <h2 className="text-gray-400 text-lg font-medium mt-10">
                No Notes Available
              </h2>
            )}

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-600 py-4 mt-5">
        <h1 className="text-center text-black font-bold text-sm md:text-lg">
          Developed by Saif Ali
        </h1>
        <p className="text-center text-black font-medium text-sm md:text-sm">saifali7455.110@gmail.com | +91 7455005247</p>
      </footer>
    </div>
  );
};

export default App;