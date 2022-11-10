const Documentation = (props: { title?: string; links: string[] }) => (
  <div>
    {!props.title ? <h2>Documentation links:</h2> : <h2>{props.title}</h2>}
    {props.links.map((link) => (
      <a key={link} href={link} target="_blank" rel="noreferrer">
        {link}
      </a>
    ))}
  </div>
);

export default Documentation;
