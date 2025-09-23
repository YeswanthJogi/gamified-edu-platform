import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./dashboard.css"; // 🔹 Import CSS

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [rewards, setRewards] = useState([]);

  const fetchData = async () => {
    const usersSnap = await getDocs(collection(db, "users"));
    setUsers(usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

    const challengesSnap = await getDocs(collection(db, "challenges"));
    setChallenges(challengesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

    const rewardsSnap = await getDocs(collection(db, "rewards"));
    setRewards(rewardsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => { fetchData(); }, []);

  const handleDeleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    fetchData();
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>

      {/* Users Section */}
      <div className="dashboard-box">
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ({user.email}) - Points: {user.ecoPoints || 0}
              <button className="dashboard-btn" onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Challenges Section */}
      <div className="dashboard-box">
        <h2>Challenges</h2>
        <ul>
          {challenges.map(ch => (
            <li key={ch.id}>{ch.title} - Points: {ch.points}</li>
          ))}
        </ul>
      </div>

      {/* Rewards Section */}
      <div className="dashboard-box">
        <h2>Rewards</h2>
        <ul>
          {rewards.map(r => (
            <li key={r.id}>{r.name} - Required Points: {r.requiredPoints}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
