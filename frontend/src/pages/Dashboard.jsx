import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getTasks, deleteTask } from "../services/api";

const Dashboard = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getTasks(); // ✅ automatically sends token
        setTasks(res.data);
      } catch (err) {
        console.error("Failed to fetch tasks", err);
      }
    };
    fetchTasks();
  }, []);


  const handleDelete = async (id) => {
    await deleteTask(id)
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
      <Link to="/add-task" className="inline-block mb-4 bg-blue-500 text-white px-4 py-2 rounded">Add Task</Link>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task._id} className="p-4 bg-white shadow rounded flex justify-between">
            <span>{task.title}</span>
            <div>
              <Link to={`/edit-task/${task._id}`} className="text-blue-600 mr-4">Edit</Link>
              <button onClick={() => handleDelete(task._id)} className="text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;