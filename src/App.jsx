import Nav from "./components/Nav";
import Hero from "./components/Hero";
import QuienSoy from "./components/QuienSoy";
import Proyectos from "./components/Proyectos";
import Servicios from "./components/Servicios";
import ComoTrabajo from "./components/ComoTrabajo";
import Respaldo from "./components/Respaldo";
import Contacto from "./components/Contacto";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <Hero />
      <QuienSoy />
      <Proyectos />
      <Servicios />
      <ComoTrabajo />
      <Respaldo />
      <Contacto />
      <Footer />
      <WhatsAppButton floating />
    </main>
  );
}
