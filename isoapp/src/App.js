import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import BrandBar from './components/BrandBar';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile/EditProfile';


function App() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <BrowserRouter>

        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column" style={{width: 400, height: 770, borderColor: 'black', borderStyle: 'solid', borderWidth: 3, borderRadius: 5}}>
            <BrandBar/>
            <div style={{flex: '1 0 auto', maxHeight: 550, overflowY: "scroll"}}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/EditProfile" element={<EditProfile/>}/>
              </Routes>
            </div>
            <NavBar/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
