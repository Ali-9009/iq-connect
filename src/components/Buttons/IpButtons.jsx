import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IpButtons() {
  const navigate = useNavigate();
  const ip = "124123123.21412.3124.12312"; // Tumhare IP
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ip)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // 2 second ke liye "Copied" show
      })
      .catch(() => {
        alert("Failed to copy IP");
      });
  };

  return (
    <div className="mt-12 space-y-4 max-w-md mx-auto">
      {/* Buttons */}
      <div className="flex sm:flex-row flex-col items-center justify-between gap-4 lg:gap-6 max-w-4xl mx-auto mt-8">
        <button className="file-input-border p-3 px-6 flex gap-2 rounded-lg text-[var(--light-black)]">
          <span className="font-bold">IP:</span> {ip}
        </button>

        <button
          onClick={handleCopy}
          className="card-btn relative"
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}
