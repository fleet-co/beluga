import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Builder from "./builder/views/Builder";

const RoutesComponent = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/builder" replace />} />
        <Route path="/builder" element={<App />} />
        <Route path="/builder/new" element={<Builder />} />
        <Route path="/builder/edit/:pageSlug" element={<Builder />} />
        <Route path="/page/:pageSlug" element={<div>Page slug</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
