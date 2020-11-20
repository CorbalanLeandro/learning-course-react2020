import './App.css';
import Header from './components/Header';
import ProductsWrapper from './components/ProductsWrapper';
import SideBar from './components/SideBar';

function App() {
  return (
    <div>
      <Header />
      <main>
        <SideBar />
        <ProductsWrapper />
      </main>
    </div>
  );
}

export default App;
