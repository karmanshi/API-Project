import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ListData from "./components/ListData";
import Summary from "./components/Summary";
function App() {
  return (
    <div>
      <Router>
      <Routes>           
            <Route path="/" element={<ListData />}></Route>
            <Route exact path="/summary" element={<Summary />}></Route>           
          </Routes>
      </Router>
    </div>
  );
}

export default App;
