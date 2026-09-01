/* Cocina de raíz editorial: marco de pincelada, crema de papel, verde guayabo y rojo ladrillo. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Restaurante El Cisne, inicio">
          <img src="/manus-storage/cisne-mark_3a469218.png" alt="" />
          <span><b>El Cisne</b><small>Restaurante</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="/">Inicio</a><a href="/menu">Menú</a><a href="/contacto">Contáctanos</a>
        </nav>
        <a className="header-cta" href="https://wa.me/573204198609" target="_blank" rel="noreferrer">Pedir por WhatsApp <span>↗</span></a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer"><div><span className="footer-mark">EL CISNE</span><p>Buen sabor, siempre.</p></div><div className="footer-right"><span>Lun–Dom · 11:30 am – 9:00 pm</span><a href="/contacto">Encuéntranos →</a></div></footer>;
}

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/menu" component={Menu} /><Route path="/contacto" component={Contacto} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
