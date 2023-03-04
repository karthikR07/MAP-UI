import "./App.css";
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';
import FormSearch from './components/form';
import Footer from './components/footer';

function App() {
  return (
    <diV className="mainContainer">
      <Sidebar></Sidebar>
      <div className="section1">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
      <FormSearch></FormSearch>
    </diV>
  );
}

export default App;
