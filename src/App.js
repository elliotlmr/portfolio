import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

export default function App() {
  const [siteIsLoaded, setSiteIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSiteIsLoaded(true);
    }, 2500);
  }, [siteIsLoaded]);

  return (
    <Router>
      {!siteIsLoaded ? (
        <Loading />
      ) : (
        <Layout>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      )}
    </Router>
  );
}
