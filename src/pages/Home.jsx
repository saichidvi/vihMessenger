import { lazy, Suspense } from "react";

// Lazy load components
const LazyHeader = lazy(() => import("../Components/Header")); //Lazy load Header.
const LazyComponent1 = lazy(() => import("../Components/Component1")); //Lazy load Component1.
const LazyComponent2 = lazy(() => import("../Components/Component2")); //Lazy load Component2.

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* To handle the failure case we use suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHeader />
        <LazyComponent1 />
        <LazyComponent2 />
      </Suspense>
    </div>
  );
}
