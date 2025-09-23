import React, { useState } from "react";
import "./Community.css";

function Community() {
  const [posts, setPosts] = useState([
    { id: 1, author: "Aarav", topic: "Green Innovations", content: "Solar-powered bicycles are a cool idea!", likes: 5 },
    { id: 2, author: "Priya", topic: "Eco-Friendly Hacks", content: "Reuse glass jars for storage instead of buying plastic.", likes: 8 },
  ]);

  const [newPost, setNewPost] = useState("");

  const handleAddPost = () => {
    if (!newPost.trim()) return;
    const newEntry = {
      id: posts.length + 1,
      author: "You",
      topic: "General",
      content: newPost,
      likes: 0,
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((p) =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  return (
    <div className="community-page">
      <h2 className="community-title">🌍 Community Forum</h2>
      <p className="community-subtitle">Collaborate, Share & Learn Together</p>

      {/* Post Form */}
      <div className="post-form">
        <textarea
          placeholder="Share your eco-friendly idea..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button onClick={handleAddPost}>Post</button>
      </div>

      {/* Discussion Threads */}
      <section className="posts-section">
        <h3>💬 Discussion Threads</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="post-card">
              <h4>{post.topic}</h4>
              <p>{post.content}</p>
              <div className="post-footer">
                <span>👤 {post.author}</span>
                <button onClick={() => handleLike(post.id)}>
                  👍 {post.likes}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Eco Tips */}
      <section className="eco-tips">
        <h3>🌱 Teacher/NGO Eco-Tips</h3>
        <ul>
          <li>Turn off lights when not in use.</li>
          <li>Carry a cloth bag instead of plastic.</li>
          <li>Plant at least one tree every year.</li>
        </ul>
      </section>

      {/* Project Showcase */}
      <section className="projects-showcase">
        <h3>📸 Student Project Showcase</h3>
        <div className="project-grid">
          <div className="project-card">🌿 Vertical Garden Project</div>
          <div className="project-card">♻️ Plastic Bottle Recycling</div>
          <div className="project-card">💡 Solar Lamps for Villages</div>
        </div>
      </section>
    </div>
  );
}

export default Community;
