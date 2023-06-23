import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Builder from "./builder/views/Builder";
import Page from "./components/Page";

const RoutesComponent = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/builder" replace />} />
        <Route path="/builder" element={<App />} />
        <Route path="/builder/new" element={<Builder />} />
        <Route path="/builder/edit/:pageSlug" element={<Builder />} />
        <Route path="/page/:pageSlug" element={<Page />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
