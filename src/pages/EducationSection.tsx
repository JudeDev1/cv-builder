import { useState } from "react";

function EducationSection({ education, setEducation }) {
  const [input, setInput] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();
    setEducation([...education, input]);
    setInput({ school: "", degree: "", startDate: "", endDate: "" });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Education</h2>

      <form onSubmit={handleAdd} className="flex flex-col gap-4">

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">School Name</label>
          <input
            type="text"
            placeholder="Enter school name"
            value={input.school}
            onChange={(e) => setInput({ ...input, school: e.target.value })}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Degree</label>
          <input
            type="text"
            placeholder="e.g. BSc Computer Science"
            value={input.degree}
            onChange={(e) => setInput({ ...input, degree: e.target.value })}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            value={input.startDate}
            onChange={(e) => setInput({ ...input, startDate: e.target.value })}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            value={input.endDate}
            onChange={(e) => setInput({ ...input, endDate: e.target.value })}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Education
        </button>
      </form>
    </div>
  );
}

export default EducationSection;
