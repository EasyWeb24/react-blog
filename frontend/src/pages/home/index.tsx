import Hero from '../../layouts/Hero';
import UniqueSellingPointsSection from '../../layouts/sections/UniqueSellingPoints';
import MakeTheRightChoice from '../../layouts/sections/MakeTheRightChoice';
import Services from '../../layouts/sections/services';
import Testimonials from '../../layouts/sections/testimonials';
import FrequentlyAskedQuestions from '../../layouts/sections/FrequentlyAskedQuestions';

const index = () => {
  return (
    <>
      <Hero />
      <UniqueSellingPointsSection />
      <MakeTheRightChoice />
      <Services />
      <Testimonials />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default index;
