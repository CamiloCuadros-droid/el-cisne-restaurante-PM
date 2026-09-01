/* Cocina de raíz editorial revisada: navbar sticky, paleta de marca exacta y pie social cercano. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

export function SiteHeader() {
  return <header className="site-header"><div className="header-inner"><a className="brand" href="/" aria-label="Restaurante El Cisne, inicio"><img src="/manus-storage/cisne-mark_3a469218.png" alt="" /><span><b>El Cisne</b><small>Restaurante</small></span></a><nav aria-label="Navegación principal"><a href="/">Inicio</a><a href="/menu">Menú</a><a href="/contacto">Contáctanos</a></nav><a className="header-cta" href="https://wa.me/573204198609" target="_blank" rel="noreferrer">Pedir por WhatsApp <span>↗</span></a></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div><span className="footer-mark">EL CISNE</span><p>Buen sabor, siempre.</p><div className="social-links" aria-label="Redes sociales"><a href="#facebook" aria-label="Facebook"><Facebook size={17} /></a><a href="#x" aria-label="X" className="x-social">X</a><a href="#instagram" aria-label="Instagram"><Instagram size={17} /></a><a href="https://wa.me/573204198609" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a></div></div><div className="footer-right"><div><span>Lun–Dom · 11:30 am – 9:00 pm</span><div className="footer-phones">320 419 8609 · 320 406 5469</div></div><a href="/contacto">Encuéntranos →</a></div></footer>;
}

function Router() { return <Switch><Route path="/" component={Home} /><Route path="/menu" component={Menu} /><Route path="/contacto" component={Contacto} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>; }
export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
