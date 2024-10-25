
import "./App.css";
import Header from "./assets/Header";
import Fotter from "./assets/Fotter";
import Showcase from "./assets/Showcase";
import Customers from "./assets/Customers";
import Features from "./assets/Features";
import Work from "./assets/Work";
import Money from "./assets/Money";
import Review from "./assets/Review";
import Questions from "./assets/Questions";
import Newsletter from "./assets/Newsletter";
function App() {

  return (
    <>
      <Header />
        <main id="main">
          <Showcase />
          <Customers />
          <Features />
          <Work />
          <Money />
          <Review />
          <Questions />
          <Newsletter />
        </main>
      <Fotter />
    </>
  );
}

export default App;
