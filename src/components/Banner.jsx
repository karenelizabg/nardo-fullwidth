import { Section } from './ui';

/* Foto a todo el ancho, sin texto. Cada instancia toma su imagen de `config[field]`.
   `shape` ("tall" | "wide") y `--photo` solo los usa el escritorio: la foto se muestra
   completa sobre su propia versión difuminada, para no estirarla. */
function Photo({ config, field, id, shape, laceTop, laceBottom }) {
  const { src, alt } = config[field];

  return (
    <Section id={id} tone="photo" className="banner" laceTop={laceTop} laceBottom={laceBottom}>
      <figure className={`banner__figure banner__figure--${shape}`} style={{ '--photo': `url("${src}")` }}>
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </figure>
    </Section>
  );
}

/* Foto vertical entre la fecha y las ubicaciones. */
export function Banner(props) {
  return <Photo {...props} field="banner" id="foto" shape="tall" />;
}

/* Foto horizontal al final de la invitación. */
export function EndPhoto(props) {
  return <Photo {...props} field="endPhoto" id="foto-final" shape="wide" />;
}
