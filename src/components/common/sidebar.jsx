import React from 'react';

const Sidebar = ({ title, options, onOptionClick, activeOption }) => {
    return (
        <div className=" w-64 bg-customWhite text-customPurple h-full fixed left-0 top-0 p-6 font-poppins">
            <h2 className="text-l font-bold mb-10 text-center ">{title}</h2>
            <ul className="space-y-4">
                {options.map((option, index) => (
                    <li key={index} 
                    onClick={() => onOptionClick(option.title)}
                    className={`flex items-center space-x-2 cursor-pointer hover:bg-customLightGray p-2 rounded 
                        ${activeOption === option.title ? 'text-customPurple bg-customLightGray' : 'hover:bg-customLightGray text-gray-500'}`}>
                        <span className='mx-3'>{option.icon}</span>
                        <span>{option.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
