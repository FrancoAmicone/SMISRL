import Image from "next/image";
import { clientes } from "@/lib/content";
import s from "./Clientes.module.css";

export default function Clientes() {
  return (
    <section id="clientes" className={s.section}>
      <div className={s.inner}>
        <p className={s.label} data-reveal>
          Clientes que confían en SMI
        </p>

        <ul className={s.grid} data-reveal>
          {clientes.map((c) => (
            <li key={c.id} className={s.cell}>
              <Image
                src={`/images/clientes/${c.id}.svg`}
                alt={c.nombre}
                width={140}
                height={52}
                style={{ objectFit: "contain" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
