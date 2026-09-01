/* Cocina de raíz editorial revisada: carrusel de platos con fotografía específica y sopa aislada en el hero. */
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "../App";

const dishes = [
  { name: "Churrasquito", category: "Especial de la casa", image: "/manus-storage/churrasquito-referencia_f1062a45.jpg", description: "Corte de res tierno, dorado a la plancha y servido con papa, mazorca, guacamole y hogao.", price: "$16.000" },
  { name: "Churrasco", category: "Especial de la casa", image: "/manus-storage/churrasco-generoso_41b84ffa.jpg", description: "Una porción generosa de carne asada, con papa, mazorca, guacamole y el sabor de la casa.", price: "$21.000" },
  { name: "Mojarra 1 lb", category: "De la costa", image: "/manus-storage/pescado-frito_40d6632d.jpg", description: "Pescado entero crujiente con patacones, ensalada fresca y limón recién cortado.", price: "$21.000" },
  { name: "Bandeja paisa", category: "Generoso", image: "/manus-storage/bandeja-paisa_dcb12da4.jpg", description: "Frijol, arroz, chicharrón, huevo, plátano maduro, aguacate y arepa.", price: "$14.000" },
  { name: "Ajiaco con pollo", category: "Sopa de la casa", image: "/manus-storage/ajiaco-pollo-plato-negro_9094f2b7.jpg", description: "Ajiaco cremoso con pollo desmechado, papa, maíz y cilantro servido en plato negro.", price: "$16.000" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const dish = dishes[active];
  const previous = () => setActive((active - 1 + dishes.length) % dishes.length);
  const next = () => setActive((active + 1) % dishes.length);
  return <div className="site-shell"><SiteHeader /><main>
    <section className="hero-home"><div className="hero-copy"><span className="eyebrow">Cocina colombiana · Sincelejo</span><h1>Hoy se almuerza<br /><em>como en casa.</em></h1><p>Sabores generosos, sopas hechas a fuego lento y platos que llegan a la mesa con ese toque de siempre.</p><div className="hero-actions"><a className="btn btn-red" href="/menu">Ver el menú <span>→</span></a><a className="text-link" href="/contacto">Visítanos <span>↗</span></a></div></div><div className="hero-image-wrap"><div className="brush-label">SABOR<br />DE CASA</div><img className="hero-image soup-hero" src="/manus-storage/sopa-arroz-plato-hondo_7af9389e.jpg" alt="Plato hondo de sopa de arroz" /><div className="hero-note"><span>Sopa del día</span><strong>Sopa de arroz</strong></div></div></section>
    <section className="intro-strip"><p>Una mesa sencilla, una cocina honesta y el gusto de recibirte bien.</p><span className="strip-line" /></section>
    <section className="feature-section"><div className="section-heading"><div><span className="eyebrow">Lo que sale de la cocina</span><h2>Platos que<br /><em>hablan por sí solos.</em></h2></div><div className="carousel-controls"><button onClick={previous} aria-label="Plato anterior"><ChevronLeft size={20} /></button><span>{String(active + 1).padStart(2, "0")} / {String(dishes.length).padStart(2, "0")}</span><button onClick={next} aria-label="Siguiente plato"><ChevronRight size={20} /></button></div></div><div className="carousel-card"><div className="carousel-image"><img src={dish.image} alt={dish.name} /><span className="carousel-badge">{dish.category}</span></div><div className="carousel-copy"><span className="eyebrow">Plato especial</span><h3>{dish.name}</h3><p>{dish.description}</p><strong>{dish.price}</strong><a className="btn btn-red" href="/menu">Ir al menú <span>→</span></a></div></div></section>
    <section className="home-callout"><div><span className="eyebrow">Domicilio gratis</span><h2>El sabor de El Cisne<br /><em>también llega.</em></h2></div><a className="btn btn-green" href="https://wa.me/573204198609" target="_blank" rel="noreferrer">Escribir por WhatsApp ↗</a></section>
  </main><SiteFooter /></div>;
}
