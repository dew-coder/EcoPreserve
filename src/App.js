import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
// import Projects from "./new_pages/Projects"
import PublishCampaign from "./pages/PublishCampaign";
import PersonalDetails from "./components/PersonalDetails";
import Profile from "./pages/Profile";
import MainNav from "./components/mainnav";

// import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar";
import Calenderc from "./pages/Calenderc";


import { useState , useEffect} from "react";
import DonateProject from "./new_pages/DonateProject";


function App() {
const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("customer");
    if (userLoggedIn) {
      setIsLogged(true);
    }
  }, []);
  return (
    
    <div className="overflow-x-hidden">
      <header>
    
        {isLogged ? <MainNav isLogged={isLogged} setIsLogged={setIsLogged}/> : <Navbar/>}
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<DonateProject/>} />
          <Route path="/Publish" element={<PublishCampaign/>} />
          <Route path="/Upcoming-events" element={<Calenderc />} />


         
          <Route path="/Login" element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />} />
          <Route path="/Signup" element={<Signup  isLogged={isLogged} setIsLogged={setIsLogged} />} />

          <Route exact path="profile" element={<Profile />}>
            <Route
              exact
              path="personal_details"

              element={<PersonalDetails />}
            />
            <Route exact path="" element={<Navigate to="personal_details" />} />
          </Route>
         
          {/* <Route path="Transactions" element={<Transactions />} /> */}
          <Route path="Invest" element={<Invest/>} />

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

