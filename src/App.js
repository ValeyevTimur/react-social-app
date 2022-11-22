// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from "./components/Profile";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

// Libraries 
import {Routes, Route} from "react-router-dom";

// Styles
import './App.scss';


function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <SideBar />
            <Routes>
                <Route exact path='/' element={<Profile />}/>
                <Route exact path='/profile' element={<Profile />}/>
                <Route path={`/dialog/:name/:id`} element={<Content />}/>
            </Routes>
        </main>
        <Footer />
    </div>
  )
}

export default App