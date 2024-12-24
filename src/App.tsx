import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComputerisedManagementSystem from "./pages/Solutions/AiEnabledIotMaintenance";
import IndoorAirQuality from "./pages/Solutions/IndoorAirQuality";
import IntegratedFacilityManagement from "./pages/Solutions/IntegratedFacilityManagement";
import NexGenDisinfectionSystem from "./pages/Solutions/NexGenDisinfectionSystem";
import StaffingAndPayrolling from "./pages/Solutions/StaffingAndPayrolling";
import SmartSurfaceDisinfectionProgram from "./pages/Solutions/SmartSurfaceDisinfectionProgram";
import HealthCare from "./pages/Sectors/HealthCare";
import Educational from "./pages/Sectors/Educational";
import PublicTransportHub from "./pages/Sectors/PublicTransportHub";
import Religious from "./pages/Sectors/Religious";
import Residential from "./pages/Sectors/Residential";
import EnergyAudit from "./pages/Solutions/EnergyAudit";
import Skilling from "./pages/Solutions/Skilling";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import Plumbing from "./pages/Solutions/Plumbing";
import ElectricalRepair from "./pages/Solutions/ElectricalRepair";
import LandScaping from "./pages/Solutions/LandScaping";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions/*">
            <Route
              path="ai-anabled-iot-management-system"
              element={<ComputerisedManagementSystem />}
            />
            <Route path="indoor-air-quality" element={<IndoorAirQuality />} />
            <Route path="plumbing" element={<Plumbing />} />
            <Route path="electrical-repair" element={<ElectricalRepair />} />
            <Route path="landscaping" element={<LandScaping />} />
            <Route path="indoor-air-quality" element={<IndoorAirQuality />} />
            <Route path="skilling" element={<Skilling />} />
            <Route path="energy-audit" element={<EnergyAudit />} />
            <Route
              path="safely-managed-sanitation"
              element={<IntegratedFacilityManagement />}
            />
            <Route
              path="nex-gen-disinfection-system"
              element={<NexGenDisinfectionSystem />}
            />
            <Route
              path="staffing-and-payrolling"
              element={<StaffingAndPayrolling />}
            />
            <Route
              path="nano-tech-cleaning-system"
              element={<SmartSurfaceDisinfectionProgram />}
            />
          </Route>

          <Route path="/sectors/*">
            <Route path="healthcare-sector" element={<HealthCare />} />
            <Route path="educational-sector" element={<Educational />} />
            <Route
              path="public-transport-hub"
              element={<PublicTransportHub />}
            />
            <Route path="religious-and-tourist-spots" element={<Religious />} />
            <Route path="residential-sector" element={<Residential />} />
          </Route>

          <Route path="/contact-us" element={<ContactPage />}/>
          <Route path="/careers" element={<CareersPage />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
