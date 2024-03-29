import { Container } from "../../commonComponents/Container";
import { Navbar } from "../../commonComponents/Navbar";
import "../../styles/homePage.css";
export const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <div className="homePage">IGREJA VINDE E CELEBRAI A DEUS</div>
    </Container>
  );
};
