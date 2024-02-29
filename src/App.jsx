import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Using react router dom for routing.
const LazyHome = lazy(() => import("./pages/Home")); // Lazy load Home component.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Lazy loaded Home page */}
        <Route
          path="/"
          // To handle the failure case we use Suspense.
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyHome />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
