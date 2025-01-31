import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Users, Github } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const buttons = [
    {
      title: 'Products',
      description: 'Browse and manage products',
      icon: Package,
      path: '/products',
      color: 'bg-blue-500',
    },
    {
      title: 'Users',
      description: 'View user list and details',
      icon: Users,
      path: '/users',
      color: 'bg-green-500',
    },
    {
      title: 'GitHub Finder',
      description: 'Search GitHub users',
      icon: Github,
      path: '/github',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {buttons.map((button) => (
        <button
          key={button.path}
          onClick={() => navigate(button.path)}
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className={`inline-flex p-3 rounded-lg ${button.color}`}>
            <button.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">{button.title}</h3>
          <p className="mt-1 text-gray-500">{button.description}</p>
        </button>
      ))}
    </div>
  );
};

export default Dashboard;