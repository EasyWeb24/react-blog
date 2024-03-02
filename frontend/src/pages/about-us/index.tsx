import React from 'react';
import { Container, SectionTextHeading } from './styles';
import { Link } from 'react-router-dom';
import ServiceImage from '../../assets/service_image_3.jpg';

const Index: React.FC = () => {
  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About Us
          </li>
        </ol>
      </nav>
      <div>
        <SectionTextHeading>About EasyWeb</SectionTextHeading>
        <img src={ServiceImage} />
        <p className="about-text-content">
          Welcome to EasyWeb, where we give push the boundaries of creativity
          and digital innovation to the best of our abilities and 110%
          dedication. As skilled web designers in Abuja, EasyWeb gives you a
          dedicated team of experts that produce web designs that boost your
          brand while also keeping a good design and an amazing user experience.
          Our goal is to make your business grow, gain more customers and stand
          out lorem
        </p>
      </div>
    </Container>
  );
};

export default Index;
