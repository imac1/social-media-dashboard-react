import React, {useState, useEffect} from "react";
import { toggleTheme } from "../utils/themeToggle";





export default function Header() {

    const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    toggleTheme(isDarkMode); // Call the utility function whenever the state changes
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
  };



  return (
    <>
      <h1 className="text-white text-3xl font-bold">Social Media Dashboard</h1>
      <div className="flex items-center justify-between [&_*]:dark:text-white">
        <p className="text-slate-400 font-semi-bold ">
          Total followers 23,400
        </p>
        <div className="flex gap-2 items-center justify-center">
          <span className="text-slate-400">Dark Mode</span>
          <label className="relative inline-flex items-center mb-4 cursor-pointer mt-4">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={isDarkMode}
              onChange={handleToggle} // Call the toggle handler on change
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4
              peer-focus:ring-limeGreen dark:peer-focus:ring-limeGreen dark:bg-gray-700 peer-checked:after:translate-x-full
              peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white
              after:border-gray-300 after:border 
              after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-limeGreen">
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
