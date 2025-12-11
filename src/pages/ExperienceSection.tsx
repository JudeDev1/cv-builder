import { useState } from "react";

function ExperienceSection({experience, setExperience}) {
  const [input, setInput] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();
    setExperience([...experience, input]);
    setInput({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Experience</h2>

      <form onSubmit={handleAdd} className="flex flex-col gap-4">

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            placeholder="Enter company name"
            value={input.company}
            onChange={(e) => setInput({ ...input, company: e.target.value })}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Position</label>
          <input
            type="text"
            placeholder="Backend Developer"
            value={input.position}
            onChange={(e) => setInput({ ...input, position: e.target.value })}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            value={input.startDate}
            onChange={(e) => setInput({ ...input, startDate: e.target.value })}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            value={input.endDate}
            onChange={(e) => setInput({ ...input, endDate: e.target.value })}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition font-medium"
        >
          Add Experience
        </button>
      </form>
    </div>
  );
}

export default ExperienceSection;
