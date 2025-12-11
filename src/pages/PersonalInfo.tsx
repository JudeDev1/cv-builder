import React from "react";

function PersonalInfo({personalInfo, setPersonalInfo}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Personal Information</h2>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={personalInfo.name}
            onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={personalInfo.email}
            onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Phone</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={personalInfo.phone}
            onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={personalInfo.address}
            onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
