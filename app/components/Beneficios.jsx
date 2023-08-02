import DivAnimate from "./animated/DivAnimate";
import SectionAnimate from "./animated/SectionAnimate";
import style from "./beneficios.module.scss";

const beneficio = [
  { id: 11, info: "Tnego tal beneficio" },
  { id: 12, info: "Beneficio dos" },
  { id: 13, info: "Beneficio tres" },
];

export default function Beneficios() {
  return (
    <div className={style.container} id="beneficios">
      <SectionAnimate />
      {beneficio.map(({ id, info }) => (
        <section key={id} className={style.boxContent}>
          <DivAnimate>{info}</DivAnimate>
        </section>
      ))}
    </div>
  );
}
