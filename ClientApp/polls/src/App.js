import './App.css';
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <div className="container">
      <Header></Header>
      <div class="login-section">
        <h3>Login</h3>
        <form>
          <input type="text" placeholder="epost"></input>
          <input type="password" placeholder="passord"></input>
          <button class="login-button" type="submit" onClick="stopPropagation()">Login</button>
        </form>
        <h3>Registrer deg </h3>
        <button class="signup-button">Bli med</button>
      </div>
      </div>
    </div>
  );
}

export default App;
