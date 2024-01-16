import styled from "styled-components";
export const About = styled.div``;

export const FooterContainer = styled.div`
  display: grid;
  padding: 0 10rem;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  background-color: #f0f0f0;
  color: #666;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 12px;
  color: #333;
`;
const StyledHeading = styled.h5`
  font-weight: bold;
`;

export const FooterText = styled.p``;
function Footer() {
  return (
    <FooterContainer>
      <Container>
        <StyledHeading>About</StyledHeading>
        <FooterText>How Airbnb works</FooterText>
        <FooterText>How Airbnb works</FooterText>
        <FooterText>How Airbnb works</FooterText>
        <FooterText>How Airbnb works</FooterText>
      </Container>

      <Container>
        <StyledHeading>Host</StyledHeading>
        <FooterText>How Airbnb works</FooterText>
        <FooterText>How Airbnb works</FooterText>
        <FooterText>How Airbnb works</FooterText>
        <FooterText>How Airbnb works</FooterText>
      </Container>
      <Container>
        <StyledHeading>Support</StyledHeading>
        <FooterText>How Airbnb works</FooterText>
        <FooterText>How Airbnb works</FooterText>
        <FooterText>How Airbnb works</FooterText>
        <FooterText>How Airbnb works</FooterText>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
