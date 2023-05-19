import { About, Blog, Contact, Footer, Hero, Message, Navbar, Worker } from "../src/components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-slate-50">
        <Hero />
        <About />
        <Worker />
        <Message />
        <Contact />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
