import { Container, SectionTextHeading, ContactForm } from './styles';

const index: React.FC = () => {
  return (
    <Container>
      <SectionTextHeading>Contact Us</SectionTextHeading>
      <ContactForm>
        <input
          type="text"
          placeholder="John Doe"
          name="name"
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          name="email"
          autoComplete="off"
        />

        <input
          type="tel"
          placeholder="444-444-444"
          name="phoneNumber"
          autoComplete="off"
        />
        <input
          type="text"
          autoComplete="off"
          placeholder="Enter your subject here"
          name="subject"
        />
        <textarea
          rows={4}
          placeholder="Type your message here"
          autoComplete="off"
        ></textarea>
        <button type="submit">Send Us A Message</button>
      </ContactForm>
    </Container>
  );
};

export default index;
