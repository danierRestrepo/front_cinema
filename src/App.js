import './App.css';
import { Content } from './components/content/Content';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
