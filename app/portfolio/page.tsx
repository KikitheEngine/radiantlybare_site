import Image from "next/image";

const images = [
  { src: "/images/lashes.webp", alt: "Lash lift results" },
  { src: "/images/lobby_2.webp", alt: "Studio lobby" },
  { src: "/images/tools.webp", alt: "Esthetics tools" },
  { src: "/images/room.webp", alt: "Treatment room" },
  { src: "/images/thigh_wax.webp", alt: "Waxing service" },
  { src: "/images/cream.webp", alt: "Skincare products" },
  { src: "/images/face_scrub.webp", alt: "Facial treatment" },
  { src: "/images/armpit.webp", alt: "Underarm waxing" },
  { src: "/images/eyebrows.webp", alt: "Eyebrow service" },
  { src: "/images/destinee.webp", alt: "Destinee, esthetician" },
  { src: "/images/brows_pov.webp", alt: "Eyebrow lamination close-up" },
  { src: "/images/armpit_close.webp", alt: "Underarm waxing close-up" },
];

export default function PortfolioPage() {
  return (
    <section className="bg-white pt-14 pb-60 px-6">
      <div className="mx-auto max-w-5xl">
        <h1
          className="mb-14"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "#a27946",
            fontSize: "clamp(2.25rem, 6vw, 3.25rem)",
            fontWeight: 600,
          }}
        >
          Portfolio
        </h1>

        {/* Pinterest-style masonry via CSS columns */}
        <div className="columns-2 sm:columns-3 gap-3">
          {images.map((img) => (
            <div key={img.src} className="break-inside-avoid mb-3">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                sizes="(max-width: 640px) 50vw, 33vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
