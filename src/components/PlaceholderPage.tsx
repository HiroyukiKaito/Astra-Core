type Props = { title: string; description: string };

export default function PlaceholderPage({ title, description }: Props) {
  return (
    <section>
      <h1 style={{ fontSize: 24, marginBottom: 8 }}>{title}</h1>
      <p style={{ color: "#A7B2C5" }}>{description}</p>
      <p style={{ color: "#F5B942", fontSize: 13, marginTop: 16 }}>
        Placeholder — fitur diimplementasikan pada tahap roadmap terkait.
      </p>
    </section>
  );
}