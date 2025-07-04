import React, { useEffect, useState } from 'react';
import './ProfileSetting.css';

export default function ProfileSettings() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch('http://localhost:5000/api/profile', {
          method: 'GET',
          credentials: 'include',
        });
        if (!res.ok) throw new Error('Failed to load profile');
        const data = await res.json();
        setForm({
          name: data.name || '',
          email: data.email || '',
          password: '',
        });
      } catch (err) {
        setMessage({ type: 'error', text: err.message });
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      const res = await fetch('http://localhost:5000/api/profile', {
  method: 'PUT',                 // Correct HTTP method for update
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),    // Body with updated data
});

      if (!res.ok) throw new Error('Failed to update profile');
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    }
  };

  if (loading) return <div>Loading profile settings...</div>;

  return (
    <div className="profile-settings-container">
      <h2>Profile Settings</h2>
      {message && <div className={`message ${message.type}`}>{message.text}</div>}

      <form onSubmit={handleSubmit} className="profile-form">
      

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter new password"
          />
        </label>

        <button type="submit" className="btn-submit">Save Changes</button>
      </form>
    </div>
  );
}
