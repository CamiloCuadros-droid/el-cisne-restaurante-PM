/* Cocina de raíz editorial: hero asimétrico, fotografía cálida y CTA directo a la mesa. */
import { SiteFooter, SiteHeader } from "../App";

export default function Home() {
  return <div className="site-shell"><SiteHeader /><main>
    <section className="hero-home">
      <div className="hero-copy"><span className="eyebrow">Cocina colombiana · Sincelejo</span><h1>Hoy se almuerza<br /><em>como en casa.</em></h1><p>Sabores generosos, sopas hechas a fuego lento y platos que llegan a la mesa con ese toque de siempre.</p><div className="hero-actions"><a className="btn btn-red" href="/menu">Ver el menú <span>→</span></a><a className="text-link" href="/contacto">Visítanos <span>↗</span></a></div></div>
      <div className="hero-image-wrap"><div className="brush-label">SABOR<br />DE CASA</div><img className="hero-image" src="/manus-storage/almuerzo-colombiano_ad05b0d4.jpg" alt="Almuerzo colombiano con sopa, pollo, arroz y aguacate" /><div className="hero-note">El plato del día<br /><strong>$16.000</strong></div></div>
    </section>
    <section className="intro-strip"><span className="strip-number">01</span><p>Una mesa sencilla, una cocina honesta y el gusto de recibirte bien.</p><span className="strip-line" /></section>
    <section className="feature-section"><div className="section-heading"><span className="eyebrow">Lo que sale de la cocina</span><h2>Platos que<br /><em>hablan por sí solos.</em></h2></div><div className="dish-grid"><article className="dish-card dish-large"><img src="/manus-storage/bandeja-paisa_dcb12da4.jpg" alt="Bandeja paisa abundante" /><div><span>01 · Generoso</span><h3>Bandeja paisa</h3><p>La combinación que nunca falla: frijol, arroz, chicharrón, huevo, plátano y arepa.</p><a href="/menu">Ver en el menú →</a></div></article><article className="dish-card"><img src="/manus-storage/pescado-frito_40d6632d.jpg" alt="Mojarra frita con patacones" /><div><span>02 · De la costa</span><h3>Mojarra 1 lb</h3><p>Crujiente, fresca y con limón.</p><strong>$21.000</strong></div></article></div></section>
    <section className="home-callout"><div><span className="eyebrow">Domicilio gratis</span><h2>El sabor de El Cisne<br /><em>también llega.</em></h2></div><a className="btn btn-green" href="https://wa.me/573204198609" target="_blank" rel="noreferrer">Escribir por WhatsApp ↗</a></section>
  </main><SiteFooter /></div>;
}
