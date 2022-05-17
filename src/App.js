import { Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header from "./UI/Header";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <Route>
          <Login />
        </Route>
      </main>
    </div>
  );
}

export default App;
