import {
  ButtonWrapper,
  Container,
  HeadingTextWrapper,
  HeroReviewWrapper,
  Overlay,
} from './styles';
import HeroImage from '../../assets/hero_image.jpg';
import { Link } from 'react-router-dom';
const index: React.FC = () => {
  return (
    <Container>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <HeadingTextWrapper>
              <span> We Design Websites Here</span>
              <p>
                EasyWeb is one of the best website design and web development
                companies in Abuja, our goal is to help businesses grow online
                and gain customers easily. Every web designer at our company
                rigorous assessment before joining to ensure our customers get
                the best value.
              </p>
            </HeadingTextWrapper>
            <ButtonWrapper>
              <Link to="/">
                <span>Get A Free Quote</span>{' '}
              </Link>
              <Link to={'/'}>Hire Us On Fiverr</Link>
            </ButtonWrapper>
            <HeroReviewWrapper>
              <span>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </span>
              <span>Google Reviews</span>
            </HeroReviewWrapper>
          </div>
        </div>
      </div>
      <img src={HeroImage} />
      <Overlay />
    </Container>
  );
};

export default index;
