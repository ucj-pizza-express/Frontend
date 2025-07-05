import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./Admin.css";

export default function Notifications() {
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  // Fetch feedback on component mount
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/feedback");
      setFeedbackList(res.data);
    } catch (error) {
      console.error("Failed to fetch feedback", error);
      setFeedbackList([]);
    }
  };

  const sendNotification = async () => {
    if (!message.trim()) {
      alert("Please enter a message to send.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/notifications/send", {
        message,
      });

      if (res.data.success) {
        alert(`Notification sent: "${message}"`);
        setMessage("");
      }
    } catch (error) {
      console.error("Failed to send notification", error);
      alert("Failed to send notification.");
    }
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Delete this feedback?")) {
      try {
        await axios.delete(`http://localhost:5000/api/feedback/${id}`);
        setFeedbackList(feedbackList.filter((f) => f.id !== id));
      } catch (error) {
        console.error("Failed to delete feedback", error);
        alert("Failed to delete feedback.");
      }
    }
  };

  return (
    <div className="notifications-container">
      <h2>Notifications / Messages</h2>

      <section className="send-section">
        <h3>Send Notification</h3>
        <textarea
          rows="4"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendNotification}>Send</button>
      </section>

      <section className="feedback-section">
        <h3>Customer Feedback & Complaints</h3>
        {feedbackList.length === 0 ? (
          <p>No feedback available.</p>
        ) : (
          <ul className="feedback-list">
            {feedbackList.map(({ id, user, feedback, date }) => (
              <li key={id} className="feedback-card">
                <div className="feedback-header">
                  <strong>{user}</strong>
                  <span>{date}</span>
                </div>
                <p>{feedback}</p>
                <button onClick={() => deleteFeedback(id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
