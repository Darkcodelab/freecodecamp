// Components
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

// Provider
import { MDProvider } from "./context/MDContext";

function App() {
  return (
    <MDProvider>
      <div className="App">
        <Header />
        <Wrapper />
      </div>
    </MDProvider>
  );
}

export default App;
