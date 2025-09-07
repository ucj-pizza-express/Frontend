import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import "./Admin.css";

export default function Notifications() {
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact/feedback");
      setFeedbackList(res.data);
    } catch (error) {
      console.error("Failed to fetch feedback", error);
      setFeedbackList([]);
    }
  };

  const sendNotification = async () => {
    if (!message.trim()) return alert("Please enter a message to send.");

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/contact/send", { message });
      if (res.data.success) {
        alert(`✅ Notification sent to ${res.data.sentTo} users`);
        setMessage("");
      }
    } catch (error) {
      console.error("Failed to send notification", error);
      alert("❌ Failed to send notification.");
    }
    setLoading(false);
  };

  const deleteFeedback = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setFeedbackList((prev) => prev.filter((f) => f._id !== id));
    } catch (error) {
      console.error("Failed to delete feedback", error);
      alert("❌ Failed to delete feedback.");
    }
  };

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="notifications-container">
        <h2>Admin Notifications</h2>

        {/* Send Notification Section */}
        <section className="send-section ">
          <h3>✉️ Send Notification to All Users</h3>
          <textarea
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendNotification} disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </section>

        {/* Feedback Section */}
        <section className="feedback-section">
          <h3>📝 Customer Feedback & Complaints</h3>
          {feedbackList.length === 0 ? (
            <p>No feedback available.</p>
          ) : (
            <ul className="feedback-list">
              {feedbackList.map(({ _id, name, email, message }) => (
                <li key={_id} className="feedback-card">
                  <div className="feedback-header">
                    <strong>{name}</strong> <span className="email">({email})</span>
                  </div>
                  <p className="feedback-message">{message}</p>
                  <button onClick={() => deleteFeedback(_id)} className="delete-btn">🗑 Delete</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
