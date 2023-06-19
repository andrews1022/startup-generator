// components
import Footer from "../Footer/Footer";
import Generate from "../Generate/Generate";
import Header from "../Header/Header";

// styled components
import * as S from "./App.styles";

const App = (): JSX.Element => (
  <S.Wrapper>
    <Header />
    <Generate />
    <Footer />
  </S.Wrapper>
);

export default App;
