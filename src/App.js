import Header from './components/Header';
import Footer from './components/Footer';
import Profile from "./components/Profile";
import SideBar from "./components/SideBar";
import Dialogs from "./components/Dialogs";
import {Routes, Route} from "react-router-dom";
import './App.scss';
import Content from "./components/Content";


function App() {

  return (
    <div className="App">
        <Header />
        <main>
            <SideBar />
            <Routes>
                <Route exact path='/' element={<Content />}/>
                <Route exact path='/profile' element={<Profile />}/>
                <Route exact path='/dialogs' element={<Dialogs />}/>
            </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;