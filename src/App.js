import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import Homepage from './customer/pages/HomePage';
import Footer from './customer/components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <Homepage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
