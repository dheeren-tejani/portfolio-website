import React from 'react';
import { Navigate } from 'react-router-dom';

// Blogs section has been removed - redirect to home
const Blogs: React.FC = () => {
  return <Navigate to="/" replace />;
};

export default Blogs;
