import React from 'react';
import { useParams } from 'react-router-dom';

const Index: React.FC = () => {
  const { slug } = useParams();

  return <div>{slug}</div>;
};

export default Index;
