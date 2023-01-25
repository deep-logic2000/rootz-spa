import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import AppRoutes from "./Routes/Routes";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
