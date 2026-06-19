import Image from "next/image";
import Link from "next/link";

const GLOSSGENIUS_URL = "https://radiantlybare.glossgenius.com/services";

const services = [
  {
    image: "/images/brazillian.webp",
    name: "Brazilian",
    description:
      "Female anatomy. Removal of all hair from both the front and back side. If you want to leave a little, just let me know!",
  },
  {
    image: "/images/lamination.webp",
    name: "Eyebrow Lamination",
    description:
      "Lamination of the brows to give a fuller appearance, tint to temporarily stain the skin, and hair brow wax to leave you with picture perfect brows.",
  },
  {
    image: "/images/lash_lift.webp",
    name: "Lash Lift",
    description:
      "Want to wake up with curly lashes that last up to 6 weeks!? Then a lash lift is just what you need! Please come with a clean face/no makeup.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Tagline */}
          <p
            className="text-center mb-28 leading-snug"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#a27946",
              fontSize: "clamp(2.5rem, 7.5vw, 4.5rem)",
              fontWeight: 600,
              letterSpacing: "0.03em",
            }}
          >
            Radiant. Confident. Beautifully Bare.
          </p>

          {/* Mobile: column / Desktop: row */}
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-16">

            {/* Tombstone image */}
            <div className="shrink-0">
              <div
                className="relative overflow-hidden"
                style={{
                  width: "340px",
                  height: "490px",
                  borderTopLeftRadius: "170px",
                  borderTopRightRadius: "170px",
                }}
              >
                <Image
                  src="/images/home_hero.webp"
                  alt="Radiantlybare studio"
                  fill
                  sizes="300px"
                  loading="eager"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Text — centered on mobile, left on desktop */}
            <div className="flex flex-col items-center text-center gap-6 max-w-md sm:items-start sm:text-left">
              <h1
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "#a27946",
                  fontSize: "clamp(2.25rem, 6vw, 3.25rem)",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Who We Are
              </h1>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-libre)", color: "#363c1f" }}
              >
                At Radiantly Bare, we believe in the magic of self-care and
                rejuvenation, striving to create an experience where each guest
                feels cherished and renewed. Feel RADIANT in your BARE skin
                because YOU are BEAUTIFUL!
              </p>
              <Link
                href="/about"
                style={{
                  display: "inline-block",
                  padding: "1.25rem 3rem",
                  backgroundColor: "#415e07",
                  color: "#ffffff",
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "8px",
                  marginTop: "1rem",
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mid divider ── */}
      <div className="mx-6" style={{ borderTop: "1px solid #363c1f" }} />

      {/* ── Services ── */}
      <section className="pt-20 pb-60 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-center mb-20"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#a27946",
              fontSize: "clamp(2.25rem, 6vw, 3.25rem)",
              fontWeight: 600,
            }}
          >
            Explore our Services
          </h1>

          {/* 1 col on mobile, 3 col on desktop */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-12">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col items-center text-center gap-4"
              >
                <div
                  className="relative shrink-0 rounded-full overflow-hidden"
                  style={{ width: "190px", height: "190px" }}
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="190px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "#a27946",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-libre)", color: "#363c1f" }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <a
              href={GLOSSGENIUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "1.25rem 3rem",
                backgroundColor: "#415e07",
                color: "#ffffff",
                fontFamily: "var(--font-playfair)",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "8px",
              }}
            >
              See All Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
