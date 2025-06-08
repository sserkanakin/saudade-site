export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-amber-500 inline-block">
        About Saudade
      </h2>
      <div className="flex flex-wrap gap-10 items-start">
        <div className="flex-[2] min-w-[300px] space-y-4">
          <p>
            Saudade is a collective of music lovers hosting events and sessions in
            Enschede. We aim to bring people together through deep and soulful
            house music.
          </p>
          <p>
            Our team curates unique experiences where everyone can feel the rhythm
            and share good vibes. Join us for our next session or browse the
            gallery of our past events.
          </p>
        </div>
        <div className="flex-1 min-w-[250px]">
          <img src="/assets/images/about-image.png" alt="About Saudade" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}
