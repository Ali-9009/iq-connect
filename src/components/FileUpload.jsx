import { useState } from "react";
import { Image } from "lucide-react";

export default function FileUpload() {
  const [fileName, setFileName] = useState("No File Chosen");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="">
      {/* Top text */}
      <p className="text-center italic text-gray-600 mb-2 text-sm">
        Please upload square image, size less than 100KB
      </p>

      {/* Upload box */}
      <div className="flex items-center gap-5 file-input-border rounded-xl px-5 py-4">
        {/* Icon */}
        <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
          <Image size={22} />
        </div>

        {/* Button */}
        <label
          className="border-2 border-emerald-500 text-emerald-500 font-semibold px-5 py-2 rounded-md cursor-pointer hover:bg-emerald-500 hover:text-white transition"
          style={{ border: "1px solid #10B981" }}
        >
          Choose File
          <input type="file" className="hidden" onChange={handleChange} />
        </label>

        {/* File name */}
        <span className="text-gray-700">
          {fileName.length > 12 ? fileName.slice(0, 12) + "..." : fileName}
        </span>
      </div>
    </div>
  );
}
