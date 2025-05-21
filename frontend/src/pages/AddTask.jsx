import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTask } from "../services/api";
import { useAuth } from "../context/AuthContext";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const token = localStorage.getItem("token");
       console.log("TOKEN BEFORE SUBMIT:", token);

        const res = await addTask({ title }); // ✅ token is automatically added
       console.log("Task added:", res.data);
      navigate("/dashboard");
    } catch (err) {
      console.error("Failed to create task", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default AddTask;