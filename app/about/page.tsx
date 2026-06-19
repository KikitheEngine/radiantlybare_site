import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* ── Bio ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1
            className="mb-10"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#a27946",
              fontSize: "clamp(2.25rem, 6vw, 3.25rem)",
              fontWeight: 600,
            }}
          >
            A Little Bit About Me
          </h1>

          {/* Mobile: column / Desktop: row — text left, portrait right */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-14 sm:items-start">

            {/* Text */}
            <div className="flex-1">
              <p
                className="text-base leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-libre)", color: "#363c1f" }}
              >
                Hi, I&apos;m Destinee! The founder and owner of Radiantlybare,
                a licensed and insured esthetics studio located in downtown
                Hanford, California. I specialize in Brazilian waxing and offer
                a variety of other professional skincare services tailored to
                your needs.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-libre)", color: "#363c1f" }}
              >
                My mission is to provide exceptional care in a welcoming,
                comfortable environment. I believe self-care is essential, and
                my goal is to help you feel confident, refreshed, and radiant in
                your bare skin!
              </p>
            </div>

            {/* Portrait — centered on mobile, right on desktop */}
            <div className="shrink-0 flex justify-center sm:justify-end">
              <div
                className="relative overflow-hidden"
                style={{ width: "300px", height: "390px" }}
              >
                <Image
                  src="/images/portrait_1.webp"
                  alt="Destinee, founder of Radiantlybare"
                  fill
                  sizes="260px"
                  loading="eager"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-6" style={{ borderTop: "1px solid #363c1f" }} />

      {/* ── Cancellation Policy ── */}
      <section className="pt-20 pb-44 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#a27946",
              fontSize: "clamp(2.25rem, 6vw, 3.25rem)",
              fontWeight: 600,
            }}
          >
            Our Cancellation Policy
          </h2>
          <p
            className="text-base leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: "var(--font-libre)", color: "#363c1f" }}
          >
            Cancellations or reschedules made within 24 hours of your
            appointment will be charged 50% of the service total. If you arrive
            more than 10 minutes late, it will be considered a no-show, and 100%
            of the service will be charged. I appreciate your understanding and
            respect for my time and policies. It allows me to continue providing
            the best experience for all my clients.
          </p>

          <div
            className="relative overflow-hidden w-full max-w-xl"
            style={{ height: "380px" }}
          >
            <Image
              src="/images/lobby.webp"
              alt="Radiantlybare studio lobby"
              fill
              sizes="(max-width: 640px) 100vw, 576px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
