import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={s.section} id="inicio">
      <div className={s.rule} aria-hidden="true" />

      <p className={s.eyebrow} data-reveal>
        Santa Fe, Argentina
      </p>

      <h1 className={s.headline} data-reveal>
        Soluciones de<br />
        Mantenimiento<br />
        e Ingeniería
      </h1>

      <p className={s.sub} data-reveal>
        Gestión y profesionalismo para la industria. Mantenimiento, ingeniería y
        montajes mecánicos con la experiencia de empresas de primera línea.
      </p>

      <div className={s.actions} data-reveal>
        <a className={s.btnPrimary} href="#servicios">
          Ver servicios
        </a>
        <a className={s.btnSecondary} href="#contacto">
          Contactar
        </a>
      </div>
    </section>
  );
}
