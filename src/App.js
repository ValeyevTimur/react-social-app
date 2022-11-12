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


function App() {

  const dialogData = [
    {'id': 1, 'name': 'Jack', 'shortText': 'Hello, watsuuup...' },
    {'id': 2, 'name': 'Mike', 'shortText': 'Call me back please...' },
    {'id': 3, 'name': 'Sara', 'shortText': 'how are youdsdsdsdsdsdsdsdsdsdsdssdsdsd?...' },
    {'id': 4, 'name': 'Dave', 'shortText': 'could you check email please...' },
]

const dialogInfo = [
  {'id': 1, 'name': 'Jack', 'text': 'Hello, watsuuup...d asd asfsafas f fasf asf asf asf asf asf asf asf asf asf asf asf asf a' },
  {'id': 2, 'name': 'Mike', 'text': 'Call me back please...sdfsdaggggggggggggggggggggggggggggggggggggggggggggggggggg' },
  {'id': 3, 'name': 'Sara', 'text': 'how are youdsdsdsdsdsdsdsdsdsdsdssdsdsd?...' },
  {'id': 4, 'name': 'Dave', 'text': 'could you check email please...asdasdddddddddddddddddddddddddddddd' },
]


  return (
    <div className="App">
        <Header />
        <main>
            <SideBar dialogData={dialogData}/>
            <Routes>
                <Route exact path='/' element={<Content />}/>
                <Route exact path='/profile' element={<Profile />}/>
                <Route path={`/dialogs/:name/:id`} element={<Dialog dialogInfo={dialogInfo} />}/>
            </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;