import CounterHook from "./CounterHook";
import { Route, Routes } from "react-router-dom";
import Error from "./Error";
import { Helmet } from "react-helmet";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <>
      <Helmet>
        <title>reduce counter</title>
        <meta name="description" content="reducer counter" />
      </Helmet>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<CounterHook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
  
}

export default App;