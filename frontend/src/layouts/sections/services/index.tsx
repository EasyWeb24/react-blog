import {
  Container,
  SectionTextHeading,
  ServiceItem,
  ServiceItemsWrapper,
} from './styles';
import ServiceImage from '../../../assets/service_image.jpg';
import ServiceImage2 from '../../../assets/service_image_2.jpg';
import ServiceImage3 from '../../../assets/service_image_3.jpg';
import ServiceImage4 from '../../../assets/service_image_4.jpg';

import { Link } from 'react-router-dom';

const serviceItems = [
  {
    serviceName: 'Responsive Web Design',
    serviceDescription:
      'We ensure websites are optimized for various devices, providing a consistent user experience across all devices.',
    serviceImage: ServiceImage,
  },
  {
    serviceName: 'Website Maintenance ',
    serviceDescription:
      'We offer support and maintenance services, utilizing the best web technologies and tools, like Google Analytics.',
    serviceImage: ServiceImage2,
  },
  {
    serviceName: 'Website Redesign',
    serviceDescription:
      'Our professionals help improve the user experience, styling, and functionality of existing websites.',
    serviceImage: ServiceImage4,
  },
  {
    serviceName: 'Domain Hosting and Setup',
    serviceDescription:
      'We assist clients in obtaining the best domain names and hosting for their websites.',
    serviceImage: ServiceImage3,
  },
];

const index: React.FC = () => {
  return (
    <Container>
      <div className="text-lg-center text-sm-end">
        <SectionTextHeading>What We Do</SectionTextHeading>
      </div>
      <ServiceItemsWrapper>
        {serviceItems.map(
          ({ serviceImage, serviceDescription, serviceName }) => (
            <ServiceItem key={serviceName}>
              <div>
                <img
                  src={serviceImage}
                  alt="A MacBook Pro next to other devices"
                />
                <div>
                  <Link to={`/services${serviceName}`}>{serviceName}</Link>
                  <p>{serviceDescription}</p>
                </div>
              </div>
            </ServiceItem>
          )
        )}
      </ServiceItemsWrapper>{' '}
      <div className="text-md-center text-xs-start">
        {' '}
        <Link to="/services" className="services-cta">
          <span>Explore Our Services</span>
        </Link>
      </div>
    </Container>
  );
};

export default index;
