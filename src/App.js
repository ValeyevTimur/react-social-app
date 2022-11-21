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


function App({ store }) {
  return (
    <div className="App">
        <Header />
        <main>
            <SideBar store={store}/>
            <Routes>
                <Route exact path='/' element={<Profile />}/>
                <Route exact path='/profile' element={<Profile />}/>
                <Route path={`/dialog/:name/:id`} element={<Content store={store} />}/>
            </Routes>
        </main>
        <Footer />
    </div>
  )
}

export default App