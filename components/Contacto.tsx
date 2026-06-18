import { contacto } from "@/lib/content";
import s from "./Contacto.module.css";

export default function Contacto() {
  return (
    <section id="contacto" className={s.section}>
      <div className={s.inner}>
        <div data-reveal>
          <p className={s.label}>Contacto</p>
          <h2 className={s.heading}>
            Hablemos
          </h2>
        </div>

        <div data-reveal>
          <dl className={s.datos}>
            <div className={s.datoItem}>
              <dt className={s.datoLabel}>Responsable</dt>
              <dd className={s.datoValor}>{contacto.nombre}</dd>
            </div>
            <div className={s.datoItem}>
              <dt className={s.datoLabel}>Matrícula</dt>
              <dd className={s.datoValor}>{contacto.matricula}</dd>
            </div>
            <div className={s.datoItem}>
              <dt className={s.datoLabel}>Teléfono</dt>
              <dd className={s.datoValor}>{contacto.telefono}</dd>
            </div>
            <div className={s.datoItem}>
              <dt className={s.datoLabel}>Correo</dt>
              <dd className={s.datoValor}>{contacto.email}</dd>
            </div>
            <div className={s.datoItem}>
              <dt className={s.datoLabel}>Instagram</dt>
              <dd className={s.datoValor}>{contacto.instagramHandle}</dd>
            </div>
          </dl>

          <div className={s.links}>
            <a
              className={s.btnPrimary}
              href={contacto.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              className={s.btnOutline}
              href={`mailto:${contacto.email}`}
            >
              Enviar email
            </a>
            <a
              className={s.btnOutline}
              href={contacto.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
