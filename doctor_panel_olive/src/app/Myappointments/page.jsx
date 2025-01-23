'use client'
import React, { useState } from 'react';

const styles = {
  rating: {
    color: '#fbbf24',
  },
  body: {
    backgroundColor: '#f0f9f9',
  },
  sidebarIcon: {
    color: '#64748b',
  },
  sidebarIconActive: {
    color: '#000',
  },
  text: {
    color: '#171717',
  },
};

const MedicalAppointmentsDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen" style={styles.body}>
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white">
        <span className="text-xl font-bold" style={styles.text}>Appointments</span>
        <button onClick={toggleMobileMenu}>
          <i className="bi bi-list text-2xl"></i>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        ${isMobileMenuOpen ? 'block' : 'hidden'} md:block 
        w-full md:w-20 lg:w-64 p-4 bg-white 
        fixed md:static inset-0 z-50 overflow-y-auto
      `}>
        <div className="space-y-6">
          {/* Sidebar Close Button for Mobile */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden absolute top-4 right-4"
          >
            <i className="bi bi-x-lg"></i>
          </button>

          {/* Sidebar Menu Items */}
          <div className="flex items-center space-x-2">
            <i className="bi bi-grid sidebar-icon" style={styles.sidebarIcon}></i>
            <span className="hidden md:inline" style={styles.text}>Dashboard</span>
          </div>
          <div className="flex items-center space-x-2">
            <i 
              className="bi bi-calendar-check sidebar-icon active" 
              style={styles.sidebarIconActive}
            ></i>
            <span className="hidden md:inline font-semibold" style={styles.text}>Appointments</span>
          </div>
          {/* Other menu items... */}
        </div>

        {/* Health Check Card - Hidden on small mobile screens */}
        <div className="hidden md:block mt-20 bg-teal-700 text-white p-4 rounded-lg">
          <div className="text-4xl font-bold">10</div>
          <div className="text-sm">days left</div>
          <div className="text-sm mt-2">Annual health check</div>
          <button className="mt-4 text-sm flex items-center">
            Book visit now
            <i className="bi bi-arrow-right ml-2"></i>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-0" style={styles.text}>
            My appointments
          </h1>
          <div className="flex items-center space-x-2">
            <i className="bi bi-bell text-gray-500"></i>
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces"
              alt="Profile" 
              className="w-8 h-8 rounded-full"
            />
            <span style={styles.text}>Nina Tominska</span>
            <i className="bi bi-chevron-down text-gray-500"></i>
          </div>
        </div>

        {/* Filters - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="relative col-span-full md:col-span-2 lg:col-span-1">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border rounded-lg" 
            />
            <i className="bi bi-search absolute left-3 top-3 text-gray-400"></i>
          </div>
          <select className="border rounded-lg p-2" style={styles.text}>
            <option>Specialization</option>
          </select>
          <select className="border rounded-lg p-2" style={styles.text}>
            <option>Visit type</option>
          </select>
          <select className="border rounded-lg p-2" style={styles.text}>
            <option>Visit status</option>
          </select>
          <div className="relative col-span-full md:col-span-2 lg:col-span-1">
            <input 
              type="text" 
              placeholder="Select date" 
              className="w-full pl-4 pr-10 py-2 border rounded-lg" 
            />
            <i className="bi bi-calendar absolute right-3 top-3 text-gray-400"></i>
          </div>
        </div>

        {/* Appointments Section */}
        <h2 className="mb-4" style={styles.text}>Upcoming</h2>
        <div className="space-y-4">
          {/* Appointment Card with Responsive Layout */}
          <div 
            className="bg-white p-4 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0"
          >
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=50&h=50&fit=crop&crop=faces"
                alt="Doctor" 
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="font-semibold" style={styles.text}>
                  dr n. med. Magdalena Ignis
                </div>
                <div className="text-sm text-gray-500 flex flex-col md:flex-row">
                  <span>
                    <i className="bi bi-calendar"></i> 15.08.2023 - 10:00
                  </span>
                  <span className="md:ml-2">
                    <i className="bi bi-geo-alt"></i> Armeria Medica, Kraków
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
              <div className="rating" style={styles.rating}>
                ★★★★½ <span className="text-gray-500">(305)</span>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-red-500 border border-red-500 rounded-lg">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Past Appointments Section */}
        <h2 className="mt-8 mb-4" style={styles.text}>Past</h2>
        <div className="space-y-4">
          {/* Past appointments placeholder */}
        </div>
      </div>
    </div>
  );
};

export default MedicalAppointmentsDashboard;