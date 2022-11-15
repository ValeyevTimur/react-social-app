// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from "./components/Profile";
import SideBar from "./components/SideBar";
import Dialog from './components/Dialog/';
import Content from "./components/Content";

// Libraries 
import {Routes, Route} from "react-router-dom";

// Styles
import './App.scss';


function App({state, addMessage, updateTextMessage}) {

  return (
    <div className="App">
        <Header />
        <main>
            <SideBar state={state}/>
            <Routes>
                <Route exact path='/' element={<Content />}/>
                <Route exact path='/profile' element={<Profile />}/>
                <Route path={`/dialogs/:name/:id`} element={<Dialog state={state} addMessage={addMessage} updateTextMessage={updateTextMessage} />}/>
            </Routes>
        </main>
        <Footer />
    </div>
  )
}

export default App