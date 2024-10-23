import "./global.css";
import Loading from "./components/Loading";
import SocialIcons from "./components/SocialIcons";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import CursorLight from "./components/CursorLight";

function App() {
  return (
    <>
      <CursorLight />
      <Loading />
      <Header />
      <SocialIcons />
      <main>
        <Hero />
        <About />
        <Work />
      </main>
      <Footer />
    </>
  );
}

export default App;
