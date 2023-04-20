import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Navbar from "./compoments/Navbar";
import Footer from "./compoments/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Clock from "./pages/Clock";
import Sleepdata from "./pages/Sleepdata";
import Display from "./pages/Display";
import Donation from "./pages/Donation";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
console.log(client);

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Navbar />
            <div className="container">
              <Routes>
                {/* Define routes to render different page components at different paths */}
                <Route path="/" element={<About />} />
                {/* Define routes to render different page components at different paths */}
                <Route path="/home" element={<Home />} />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/sleepdata" element={<Sleepdata />} />
                <Route path="/sleepdisplay" element={<Display />} />

                <Route path="/donation" element={<Donation />} />
                <Route path="/clock" element={<Clock />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
