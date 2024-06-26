"use client"
import React, { useState } from 'react';
import Link from 'next/link';
interface quiz_types{
  id:number,
  name:string,
}
interface difficulty_levels{
  id:number,
  level:string,
}

const NavBar: React.FC<{ quizTypes: quiz_types[]; difficultyLevels: difficulty_levels[] }> = ({ quizTypes, difficultyLevels }) => {
  const [visible, setVisible] = useState<string|null>(null);

  const handleMouseEnter = (type:string) => {
    setVisible(type);
  };

  const handleMouseLeave = () => {
    setVisible(null);
  };

  return (
  <div className="fixed h-screen overflow-y-auto bg-gray-800 text-white w-60">
  <div className="flex items-center justify-between px-4 py-2">
    <h1 className="text-xl font-bold">Select Quizzes</h1>
    <button className="text-white focus:outline-none">
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H11L4 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </button>
  </div>
    <nav className="bg-gray-800 p-4" >
      <ul className="flex flex-col pt-4">
        {quizTypes.map((type:quiz_types) => (
          <li className="group"
            key={type.name}
            onMouseEnter={() => handleMouseEnter(type.name)}
            onMouseLeave={handleMouseLeave}
          >
            <p className="px-4 py-2 text-gray-300 hover:text-white font-medium rounded-t-md" >
              {type.name}
            </p>
            {visible === type.name && (
              <ul className="group-hover:block hidden px-4">
                {difficultyLevels.map((level:difficulty_levels) => (
                  <li key={level.level}>
                    <Link className="text-gray-500 hover:text-white block py-1" href={`/quizzes/${type.id}/${level.id}`}>
                      {level.level}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      </nav>
      </div>
  )
}
export default NavBar;