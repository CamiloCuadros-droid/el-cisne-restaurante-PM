/* Cocina de raíz editorial: menú como carta de pared, precios protagonistas y lectura rápida. */
import { SiteFooter, SiteHeader } from "../App";

const specials = [
  ["Churrasco", "$21.000"], ["Churrasquito", "$16.000"], ["Mojarra 1 lb", "$21.000"], ["Ajiaco con pollo", "$16.000"]
];
const executives = ["Carne asada", "Costilla de cerdo frita", "Costilla de cerdo BBQ", "Pierna pernil frita", "Milanesa de pechuga", "Pechuga a la plancha"];

export default function Menu() {
  return <div className="site-shell"><SiteHeader /><main className="menu-page"><div className="page-intro"><span className="eyebrow">La carta de la casa</span><h1>El menú de<br /><em>hoy.</em></h1><p>Comida colombiana servida sin afán, con porciones que sí llenan y recetas que nos gusta repetir.</p></div><div className="menu-layout"><section className="menu-main"><div className="menu-panel red-panel"><div className="panel-title"><span>✦</span><h2>Platos especiales</h2></div>{specials.map(([name, price]) => <div className="menu-row" key={name}><span>{name}</span><i></i><strong>{price}</strong></div>)}</div><div className="menu-panel green-panel"><div className="panel-title"><span>♨</span><h2>Platos ejecutivos</h2></div><div className="price-ribbon">DE $15.000</div><ul>{executives.map(item => <li key={item}>{item}</li>)}</ul><small>Todos incluyen principio, arroz, ensalada y limonada.</small></div></section><aside className="menu-side"><img src="/manus-storage/pescado-frito_40d6632d.jpg" alt="Pescado frito con patacones" /><div className="side-note"><span>De la costa</span><h3>Mojarra<br />frita</h3><strong>$21.000</strong></div><div className="principios"><span className="eyebrow">Elige tu principio</span><p>Frijol · Garbanzo · Pepino</p></div></aside></div><section className="menu-highlight"><div><span className="eyebrow">Almuerzo corriente</span><h2>$11.500</h2><p>Sopa + proteína + principio + arroz + ensalada + limonada.</p></div><a className="btn btn-red" href="https://wa.me/573204198609" target="_blank" rel="noreferrer">Pedir este almuerzo ↗</a></section></main><SiteFooter /></div>;
}
