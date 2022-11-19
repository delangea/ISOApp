import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'


function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <div className="d-flex justify-content-center">
        <div className="App d-flex flex-column" style={{width: 400, height: 770, borderColor: 'black', borderStyle: 'solid', borderWidth: 3, borderRadius: 5}}>
          <div className="bg-dark text-white p-4">ISO</div>
          <div style={{flex: '1 0 auto'}}> 
            <span>This is where the body goes </span>
          </div>
          <div className="bg-dark p-4">Test</div>
        </div>
      </div>
    </div>
  );
}

export default App;
