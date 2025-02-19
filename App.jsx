jsx
import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const handleScan = async () => {
    const { data } = await axios.post("http://localhost:5000/scan", { url });
    setResult(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 rounded-md"
      />
      <button onClick={handleScan} className="bg-blue-500 text-white p-2 mt-2 rounded-md">
        Scan Website
      </button>
      {result && <pre className="mt-4 p-2 bg-gray-100">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default App;