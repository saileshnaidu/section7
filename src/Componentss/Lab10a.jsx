import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Lab10a = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔹 API Login Method
  const loginUser = async (id, password) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://67cfa7d6823da0212a82ea48.mockapi.io/myapi/users/${id}`
      );

      if (response.data && response.data.password === password) {
        return response.data; // ✅ Successfully authenticated
      } else {
        return null; // ❌ Authentication failed
      }
    } catch (error) {
      console.error("Login error:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Handle Login Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!id || !password) {
      setError("User ID and Password are required!");
      return;
    }

    const user = await loginUser(id, password);

    if (user) {
      if (user.role === "1") {
        navigate("/admindashboard");
      } else {
        navigate("/userdashboard");
      }
    } else {
      setError("Invalid Credentials. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="User ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-3 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className={`p-3 rounded-lg transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lab10a;
