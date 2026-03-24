import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import Kiosk from "./pages/Kiosk";
import DistributionPortal from "./pages/DistributionPortal";
import TaxationAndRegulatorySolutions from "./pages/Taxation&RegulatorySolutions";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Dmca from "./pages/Dmca";
import LaunchLayout from "./pages/launch/LaunchLayout";
import Step1 from "./pages/launch/Step1";
import Step2 from "./pages/launch/Step2";
import Step3 from "./pages/launch/Step3";
import Step4 from "./pages/launch/Step4";
import Step5 from "./pages/launch/Step5";
import Step6 from "./pages/launch/Step6";
import Insights from "./pages/Insights";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./Layouts/Layout";
import IntegratedPartners from "./pages/IntegratedPartners";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/solutions/kiosk", element: <Kiosk /> },
      { path: "/solutions/distribution-portal", element: <DistributionPortal /> },
      { path: "/solutions/taxation-&-regulatory-solutions", element: <TaxationAndRegulatorySolutions /> },
      { path: "/launch", element: <LaunchLayout />, children: [
        { index: true, element: <Step1 /> },
        { path: "step-2", element: <Step2 /> },
        { path: "step-3", element: <Step3 /> },
        { path: "step-4", element: <Step4 /> },
        { path: "step-5", element: <Step5 /> },
        { path: "step-6", element: <Step6 /> },
      ]},
      { path: "/contact", element: <Contact /> },
      { path: "/privacy-policy", element: <Privacy /> },
      { path: "/terms-and-conditions", element: <Terms /> },
      { path: "/dmca", element: <Dmca /> },
      { path: "/insights", element: <Insights /> },
      { path: "/integratedPartners", element: <IntegratedPartners /> },
    ],
  },
]);


export default function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>Loading...</div>}
    />
  );
}

