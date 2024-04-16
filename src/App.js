import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;