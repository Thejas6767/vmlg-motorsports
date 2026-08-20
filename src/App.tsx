import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import NextEvent from "./sections/NextEvent";
import Championships from "./sections/Championships";
import LatestAction from "./sections/LatestAction";
import Gallery from "./sections/Gallery";
import Sponsors from "./sections/Sponsors";
import About from "./sections/About";

import Events from "./pages/Events";
import ChampionshipsPage from "./pages/Championships";
import AboutPage from "./pages/About";
import GalleryPage from "./pages/Gallery";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

function Home() {
  return (
    <main>
      <Hero />
      <NextEvent />
      <Championships />
      <LatestAction />
      <Gallery />
      <Sponsors />
      <About />
    </main>
  );
}

function App() {
  return (
    <>
    <ScrollToTop />
      <Navbar />

    <Routes>
  <Route path="/" element={<Home />} />

  <Route
    path="/events"
    element={<Events />}
  />

  <Route
    path="/championships"
    element={<ChampionshipsPage />}
  />
  <Route
  path="/about"
  element={<AboutPage />}
/>
<Route
  path="/gallery"
  element={<GalleryPage />}
/>
<Route
  path="/contact"
  element={<Contact />}
/>
<Route
  path="/join"
  element={<Join />}
/>
</Routes>
<Footer />

    </>
  );
}

export default App;