import React, { useState } from 'react';
import Sidebar from '../components/common/sidebar';
import Institutions from '../components/systemAdmin/institution';
import Dashboard from '../components/systemAdmin/dashboard';
import Analytics from '../components/systemAdmin/analytics';
import { FaHome, FaChartBar, FaBuilding } from 'react-icons/fa'; // Example icons from react-icons

const SystemAdmin = () => {
  const adminOptions = [
    { icon: <FaHome />, title: 'Dashboard' },
    { icon: <FaBuilding />, title: 'Institutions' },
    { icon: <FaChartBar />, title: 'Analytics' },
    // Add more options as needed
];

const [activeOption, setActiveOption] = useState('Dashboard'); // Default active option

const handleOptionClick = (option) => {
    setActiveOption(option);
};
    return (
            <div className="flex h-screen">
            <Sidebar title="System Admin" options={adminOptions} activeOption={activeOption} onOptionClick={handleOptionClick} />
            <div className="ml-64 flex-grow p-8">
                {activeOption === 'Institutions' && <Institutions />}
                {activeOption === 'Dashboard' && <Dashboard />}
                {activeOption === 'Analytics' && <Analytics />}
            </div>
        </div>
    );
};

export default SystemAdmin;
