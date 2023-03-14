import GetEmployeeData from './components/getEmployeeData';
import UpdateEmployeeData from './components/UpdateEmployeeData.js';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="get" element={<GetEmployeeData />} />
            <Route path="update" element={<UpdateEmployeeData />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
