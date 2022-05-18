import { Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header from "./UI/Header";
import styles from "./App.module.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </main>
    </div>
  );
}

export default App;
