import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://67d1b8ba90e0670699bb4b8f.mockapi.io/ousers';

const Lab10 = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    role: 1,
    address: ''
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'role' ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, formData);
      }
      fetchUsers();
      setFormData({ name: '', place: '', role: 1, address: '' });
    } catch (error) {
      console.error('Error adding/updating user:', error);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      place: user.place,
      role: user.role,
      address: user.address
    });
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={formData.place}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          style={{ height: '25px' }}
        >
          <option value="1">Admin1</option>
          <option value="2">Admin2</option>
          <option value="3">User1</option>
          <option value="4">User2</option>
        </select>
        <button type="submit" style={{ marginLeft: '10px' }}>
          {editingId ? 'Save Changes' : 'Add User'}
        </button>
      </form>

      <table border="1" cellPadding="10">
        <thead>
          <tr style={{ backgroundColor: '#dadada' }}>
            <th>Name</th>
            <th>Place</th>
            <th>Address</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.place}</td>
              <td>{user.address}</td>
              <td>Role: {user.role}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button
                  onClick={() => handleDelete(user.id)}
                  style={{ marginLeft: '5px' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lab10;
