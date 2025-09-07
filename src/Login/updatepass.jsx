import React, { useState } from 'react';
 import { useParams } from 'react-router-dom';

const UpdatePasswordForm = () => {
    const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!password || !confirm) {
      setMessage('Please fill in both fields.');
      return;
    }
    if (password !== confirm) {
      setMessage('Passwords do not match.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: password }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage('Password updated successfully!');
      } else {
        setMessage(data.message || 'Failed to update password.');
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20, border: '1px solid #ddd', borderRadius: 6 }}>
      <h3>Update Password</h3>

      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 10 }}
        disabled={loading}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={e => setConfirm(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 10 }}
        disabled={loading}
      />

      <button onClick={handleUpdate} disabled={loading} style={{ width: '100%', padding: 10 }}>
        {loading ? 'Updating...' : 'Update Password'}
      </button>

      {message && <p style={{ marginTop: 10, color: '#ff6600' }}>{message}</p>}
    </div>
  );
};

export default UpdatePasswordForm;
