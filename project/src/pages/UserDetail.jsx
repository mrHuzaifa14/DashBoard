import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{user.name}</h1>
      <div className="grid gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Contact Information</h2>
          <p className="mt-2 text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Phone: {user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;