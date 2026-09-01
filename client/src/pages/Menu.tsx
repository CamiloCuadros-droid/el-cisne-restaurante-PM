/* Cocina de raíz editorial: carta clara, precio destacado y elección visual de principio y proteína. */
import { SiteFooter, SiteHeader } from "../App";

const specials = [["Churrasco", "$21.000"], ["Churrasquito", "$16.000"], ["Mojarra 1 lb", "$21.000"], ["Ajiaco con pollo", "$16.000"], ["Bandeja paisa", "$14.000"]];
const executives = ["Carne asada", "Costilla de cerdo frita", "Costilla de cerdo BBQ", "Pierna pernil frita", "Milanesa de pechuga", "Pechuga a la plancha"];
const principles = [{ name: "Frijol", icon: "beans" }, { name: "Garbanzo", icon: "chickpeas" }, { name: "Pepino", icon: "cucumber" }];
const proteins = [{ name: "Lomo asado", icon: "steak" }, { name: "Ternera", icon: "steak" }, { name: "Pollo frito", icon: "drumstick" }, { name: "Pollo sudado", icon: "drumstick" }];

function FoodIcon({ type }: { type: string }) {
  if (type === "beans") return <span className="food-icon beans-icon" aria-hidden="true"><i /><i /><i /></span>;
  if (type === "chickpeas") return <span className="food-icon chickpea-icon" aria-hidden="true"><i /><i /><i /></span>;
  if (type === "cucumber") return <span className="food-icon cucumber-icon" aria-hidden="true"><i /><i /><i /></span>;
  if (type === "steak") return <span className="food-icon steak-icon" aria-hidden="true">▰</span>;
  return <span className="food-icon drumstick-icon" aria-hidden="true">●</span>;
}

export default function Menu() {
  return <div className="site-shell"><SiteHeader /><main className="menu-page"><div className="page-intro"><span className="eyebrow">La carta de la casa</span><h1>El menú de<br /><em>hoy.</em></h1><p>Comida colombiana servida sin afán, con porciones que sí llenan y recetas que nos gusta repetir.</p></div><div className="menu-layout"><section className="menu-main"><div className="menu-panel red-panel"><div className="panel-title"><span>✦</span><h2>Platos especiales</h2></div>{specials.map(([name, price]) => <div className="menu-row" key={name}><span>{name}</span><i></i><strong>{price}</strong></div>)}</div><div className="menu-panel green-panel"><div className="panel-title"><span>♨</span><h2>Platos ejecutivos</h2><b className="panel-price">$15.000</b></div><ul>{executives.map(item => <li key={item}>{item}</li>)}</ul><small>Todos incluyen principio, arroz, ensalada y limonada.</small></div></section><aside className="menu-side"><img src="/manus-storage/pescado-frito_40d6632d.jpg" alt="Pescado frito con patacones" /><div className="side-note"><span>De la costa</span><h3>Mojarra<br />frita</h3><strong>$21.000</strong></div><div className="principios"><span className="eyebrow">Elige tu principio</span><p>Frijol · Garbanzo · Pepino</p></div></aside></div><section className="menu-highlight"><div><span className="eyebrow">Almuerzo corriente</span><h2>$11.500</h2><p>Sopa + proteína + principio + arroz + ensalada + limonada.</p><div className="choice-grid"><div className="choice-column"><h3>Elige tu principio</h3>{principles.map(item => <div className="choice-item" key={item.name}><FoodIcon type={item.icon} /><span>{item.name}</span></div>)}</div><div className="choice-column"><h3>Proteína</h3>{proteins.map(item => <div className="choice-item" key={item.name}><FoodIcon type={item.icon} /><span>{item.name}</span></div>)}</div></div></div><a className="btn btn-gold" href="https://wa.me/573204198609" target="_blank" rel="noreferrer">Pedir este almuerzo ↗</a></section></main><SiteFooter /></div>;
}
