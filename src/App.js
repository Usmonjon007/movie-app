import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App(props) {
  document.querySelector("title").innerHTML = "React Movie App";
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
