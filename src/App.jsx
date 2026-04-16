import React, { useEffect, useMemo, useState } from "react";
import { Moon, Sun, Menu, X, Check } from "lucide-react";

const sectionImages = {
  hero: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  services: [
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  ],
  work: [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  ],
  pricing: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
  contact: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
};

const services = [
  {
    title: "Signature Websites",
    text: "Custom websites with a refined visual direction that help your business feel credible from the first click.",
    details: {
      description:
        "Tailored website design for businesses that need a stronger first impression and a more premium digital presence.",
      bullets: [
        "Custom homepage and section layout",
        "Mobile-responsive structure",
        "Clear visual hierarchy and modern presentation",
        "Positioning designed to build trust quickly",
      ],
    },
  },
  {
    title: "Search Presence",
    text: "Foundational visibility and Google presence that make your business appear more discoverable and trustworthy.",
    details: {
      description:
        "A stronger online foundation so your business looks easier to find, more credible, and more established in search.",
      bullets: [
        "Foundational on-page SEO guidance",
        "Google Business Profile support",
        "Clear service/location positioning",
        "Stronger trust signals across your site",
      ],
    },
  },
  {
    title: "Brand Presence",
    text: "A cohesive digital presentation across your site and platforms so your business feels consistent everywhere it appears.",
    details: {
      description:
        "A more unified digital identity so your brand feels clean, intentional, and recognizable across every touchpoint.",
      bullets: [
        "More consistent digital presentation",
        "Cleaner brand tone and visual alignment",
        "Refined messaging direction",
        "A stronger premium feel across platforms",
      ],
    },
  },
];

const workItems = [
  {
    title: "Construction",
    text: "Strong, lead-focused concepts for service businesses that need to look established, capable, and easy to trust.",
    details: {
      description:
        "For construction brands, the goal is trust, professionalism, and a site structure that turns visitors into real leads.",
      bullets: [
        "Service-led homepage structure",
        "Trust-building visuals and messaging",
        "Clear quote / consultation call-to-actions",
        "Designed to feel established and capable",
      ],
    },
  },
  {
    title: "Barber Shops",
    text: "Sharper booking-led concepts designed to feel more modern, polished, and memorable at every touchpoint.",
    details: {
      description:
        "For barbershops, the focus is a sharper look, smoother booking flow, and a brand presence that feels current and elevated.",
      bullets: [
        "Stronger visual identity online",
        "Booking-focused user flow",
        "Cleaner gallery and service presentation",
        "A more premium, modern first impression",
      ],
    },
  },
  {
    title: "Restaurants",
    text: "Hospitality concepts with cleaner structure, stronger tone, and a more elevated first impression across devices.",
    details: {
      description:
        "Restaurant sites need to feel inviting, polished, and easy to navigate so guests can quickly connect with the brand.",
      bullets: [
        "Menu, reservation, and location clarity",
        "Visual storytelling through imagery",
        "Mobile-friendly browsing experience",
        "Elevated hospitality presentation",
      ],
    },
  },
  {
    title: "Fitness & Wellness",
    text: "Clean, energetic websites for gyms, studios, and wellness brands that need a more premium digital presence.",
    details: {
      description:
        "For fitness and wellness brands, the site should feel energized, clean, and aligned with the quality of the service itself.",
      bullets: [
        "Membership / inquiry focused structure",
        "Clean schedule and service presentation",
        "More premium lifestyle positioning",
        "Designed to motivate trust and action",
      ],
    },
  },
  {
    title: "Real Estate",
    text: "Refined presentation for agents and property-focused brands that want to showcase listings and build credibility fast.",
    details: {
      description:
        "Real estate brands benefit from a site that feels polished, trustworthy, and built to showcase properties clearly.",
      bullets: [
        "Refined listing presentation",
        "Agent-focused credibility cues",
        "Clear inquiry and viewing actions",
        "A more upscale digital brand image",
      ],
    },
  },
  {
    title: "Healthcare",
    text: "Trust-centered concepts for clinics and practices that need to feel professional, clear, and reassuring online.",
    details: {
      description:
        "Healthcare websites should feel calm, clear, and trustworthy while helping patients find key information quickly.",
      bullets: [
        "Trust-first visual direction",
        "Clear service and contact structure",
        "Professional, reassuring presentation",
        "Improved clarity for patient actions",
      ],
    },
  },
];

const pricingPlans = [
  {
    title: "Starter",
    price: "$500",
    features: [
      "Refined small business website",
      "Mobile-optimized layout",
      "Contact form setup",
      "Thoughtful premium presentation",
    ],
  },
  {
    title: "Growth",
    price: "$900",
    featured: true,
    features: [
      "Multi-section signature website",
      "Foundational search optimization",
      "Google presence guidance",
      "Strategic premium presentation",
    ],
  },
  {
    title: "Ongoing",
    price: "$99/mo",
    features: [
      "Ongoing edits and refinements",
      "Hosting guidance",
      "Priority updates",
      "Continued support",
    ],
  },
];

function NavLink({ label, onClick, theme }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`transition-all duration-300 ${theme.subtext} hover:opacity-100 hover:-translate-y-0.5`}
    >
      {label}
    </button>
  );
}

function Card({ children, theme, featured, onClick, clickable = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-[400px] flex flex-col text-left rounded-[1.5rem] border pt-3 pb-1 px-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${theme.border} ${theme.card} ${featured ? theme.featuredRing : ""} ${clickable ? "cursor-pointer" : "cursor-default"}`}
    >
      {children}
    </button>
  );
}

function SectionHeader({ title, text, theme }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl tracking-[-0.03em] md:text-5xl">{title}</h2>
      <p className={`mt-4 max-w-2xl text-base leading-7 ${theme.subtext}`}>{text}</p>
    </div>
  );
}

function DetailModal({ item, theme, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!item) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setVisible(false);
        window.setTimeout(onClose, 220);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => setVisible(true), 10);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleClose = () => {
    setVisible(false);
    window.setTimeout(onClose, 220);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-6 py-8 backdrop-blur-sm transition-all duration-200 ${visible ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"}`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-3xl rounded-[2rem] border pt-12 pb-6 px-6 md:pt-14 md:pb-8 md:px-10 shadow-2xl transition-all duration-300 ${visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.98] opacity-0"} ${theme.border} ${theme.card} ${theme.text}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className={`absolute right-6 top-6 rounded-full p-2 transition-all duration-300 hover:-translate-y-0.5 ${theme.buttonSecondary}`}
          aria-label="Close details"
        >
          <X className="h-4 w-4" />
        </button>

        {item.image && (
          <div className={`mb-6 overflow-hidden rounded-[1.5rem] border ${theme.border}`}>
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />
          </div>
        )}

        <div className="pr-12">
          <p className={`text-xs uppercase tracking-[0.28em] ${theme.subtext}`}>Details</p>
          <h3 className="mt-3 text-3xl tracking-[-0.03em] md:text-4xl">{item.title}</h3>
          <p className={`mt-5 text-base leading-7 ${theme.subtext}`}>{item.details.description}</p>

          <div className={`mt-12 rounded-[1.5rem] border p-4 ${theme.border}`}>
            <div className="text-sm font-medium">What this includes</div>
            <ul className={`mt-4 space-y-3 ${theme.subtext}`}>
              {item.details.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 leading-7">
                  <Check className="mt-1 h-4 w-4 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function getServiceImagePosition(index) {
  return ["center 40%", "center 35%", "center 45%"][index] ?? "center";
}

function getWorkImagePosition(index) {
  return [
    "center 30%",
    "center 70%",
    "center 35%",
    "center 35%",
    "center 45%",
    "center 40%",
  ][index] ?? "center";
}

function getWorkImageClassName() {
  return "h-[16.25rem] w-full object-cover block transition-transform duration-500 hover:scale-[1.04]";
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const theme = useMemo(
    () => ({
      bg: darkMode ? "bg-[#0B0B0F]" : "bg-[#FAFAF8]",
      text: darkMode ? "text-white" : "text-[#0B0B0F]",
      subtext: darkMode ? "text-white/70" : "text-black/50",
      border: darkMode ? "border-white/10" : "border-black/10",
      card: darkMode ? "bg-white/5" : "bg-white",
      input: darkMode ? "bg-white/5" : "bg-[#FEFEFC]",
      buttonPrimary: darkMode ? "bg-white text-black" : "bg-black text-white",
      buttonSecondary: darkMode
        ? "border border-white/15 text-white hover:bg-white/5"
        : "border border-black/10 text-black hover:bg-black/[0.03]",
      featuredRing: darkMode ? "ring-1 ring-white/15" : "ring-1 ring-black/10",
      headerShell: darkMode ? "border-white/10 bg-black/60" : "border-black/5 bg-white/80",
      imageFrame: darkMode ? "bg-white/5" : "bg-white",
    }),
    [darkMode]
  );

  const nav = [
    { id: "top", label: "Home" },
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const header = document.querySelector("header");
    const headerOffset = header ? header.offsetHeight + 20 : 100;
    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY - headerOffset;
    const duration = 1000;
    let startTime = null;

    const easeInOut = (t) => {
      if (t < 0.5) return 2 * t * t;
      return 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, start + (end - start) * easeInOut(progress));

      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const closeMobileAndScroll = (id) => {
    setMobileOpen(false);
    window.setTimeout(() => {
      scrollToSection(id);
    }, 0);
  };

  return (
    <>
      <div className={`${theme.bg} ${theme.text} min-h-screen transition-colors duration-300`}>
        <header className={`sticky top-0 z-40 border-b backdrop-blur-xl ${theme.headerShell}`}>
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <button
              type="button"
              onClick={() => scrollToSection("top")}
              className={`text-left ${theme.text}`}
            >
              <div className="text-lg tracking-[0.3em] md:text-xl">LENIA</div>
              <div className={`mt-1 text-sm tracking-[0.3em] md:text-base ${theme.subtext}`}>
                STUDIOS
              </div>
            </button>

            <nav className="hidden items-center gap-6 md:flex">
              {nav.map((item) => (
                <NavLink
                  key={item.id}
                  label={item.label}
                  theme={theme}
                  onClick={() => scrollToSection(item.id)}
                />
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className={`rounded-full p-2 transition-all duration-300 hover:-translate-y-0.5 ${theme.buttonSecondary}`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`rounded-full p-2 transition-all duration-300 hover:-translate-y-0.5 md:hidden ${theme.buttonSecondary}`}
                aria-label="Open menu"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="mx-auto mb-6 max-w-6xl px-6 md:hidden">
              <div className={`rounded-2xl border p-4 ${theme.border} ${theme.card}`}>
                <div className="flex flex-col gap-4">
                  {nav.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => closeMobileAndScroll(item.id)}
                      className={`text-left transition-colors ${theme.text}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </header>

        <main id="top">
          <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-24">
            <div>
              <h1 className="max-w-4xl text-5xl leading-tight tracking-[-0.03em] md:text-7xl">
                A more elevated presence for businesses ready to be seen differently.
              </h1>
              <p className={`mt-6 max-w-2xl text-base leading-7 ${theme.subtext}`}>
                Lenia crafts refined websites and elevated digital presence for businesses that want to look exceptional and build trust instantly.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className={`rounded-full px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${theme.buttonPrimary}`}
                >
                  Request a Private Demo
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("work")}
                  className={`rounded-full px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 ${theme.buttonSecondary}`}
                >
                  View Work
                </button>
              </div>
            </div>

            <div className={`overflow-hidden rounded-[2rem] border ${theme.border} ${theme.imageFrame}`}>
              <img
                src={sectionImages.hero}
                alt="Luxury office workspace"
                className="h-[420px] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </section>

          <section id="services" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
            <SectionHeader
              title="Digital services for businesses that need a stronger online presence."
              text="Lenia offers refined website design, search presence, and brand presentation for businesses that want to look more established online."
              theme={theme}
            />
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((item, index) => (
                <Card
                  key={item.title}
                  theme={theme}
                  clickable
                  onClick={() => setSelectedItem({ ...item, image: sectionImages.services[index] })}
                >
                  <div className={`mb-2 overflow-hidden rounded-[1rem] border ${theme.border}`}>
                    <img
                      src={sectionImages.services[index]}
                      alt={item.title}
                      className="h-[16.25rem] w-full object-cover block transition-transform duration-500 hover:scale-[1.04]"
                      style={{ objectPosition: getServiceImagePosition(index) }}
                    />
                  </div>
                  <div className="flex h-full flex-col">
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className={`mt-3 leading-7 ${theme.subtext}`}>{item.text}</p>

                    <div className="mt-12">
                      <span className={`text-xs uppercase tracking-[0.22em] ${theme.subtext}`}>
                        View Details
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section id="work" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
            <SectionHeader
              title="Concepts that reflect the Lenia standard."
              text="We work with businesses across all industries, building polished websites that feel modern, credible, and tailored to the brand."
              theme={theme}
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {workItems.map((item, index) => (
                <Card
                  key={item.title}
                  theme={theme}
                  clickable
                  onClick={() => setSelectedItem({ ...item, image: sectionImages.work[index] })}
                >
                  <div className={`mb-2 overflow-hidden rounded-[1rem] border ${theme.border}`}>
                    <img
                      src={sectionImages.work[index]}
                      alt={item.title}
                      className={getWorkImageClassName()}
                      style={{ objectPosition: getWorkImagePosition(index) }}
                    />
                  </div>
                  <div className="flex h-full flex-col">
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className={`mt-3 leading-7 ${theme.subtext}`}>{item.text}</p>

                    <div className="mt-12">
                      <span className={`text-xs uppercase tracking-[0.22em] ${theme.subtext}`}>
                        View Details
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section id="pricing" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
            <div className={`mb-10 overflow-hidden rounded-[2rem] border ${theme.border}`}>
              <img
                src={sectionImages.pricing}
                alt="Business planning and pricing"
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
            <SectionHeader
              title="Straightforward pricing, presented with clarity."
              text="Simple packages for businesses that want a more polished digital presence without unnecessary complexity."
              theme={theme}
            />
            <div className="grid gap-6 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <Card key={plan.title} theme={theme} featured={plan.featured}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl">{plan.title}</h3>
                    {plan.featured && (
                      <span className={`rounded-full border px-3 py-1 text-xs ${theme.border}`}>
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="mt-4 text-3xl">{plan.price}</div>
                  <ul className={`mt-6 space-y-3 ${theme.subtext}`}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-1 h-4 w-4 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className={`mt-12 rounded-full px-5 py-3 ${theme.buttonPrimary}`}
                  >
                    Inquire
                  </button>
                </Card>
              ))}
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
            <div className="mb-12">
              <h2 className="text-4xl tracking-[-0.03em] md:text-5xl">
                Request a private demo for your business.
              </h2>
              <p className={`mt-4 max-w-2xl text-base leading-7 ${theme.subtext}`}>
                Share a few details and Lenia will prepare a tailored homepage concept that reflects a more elevated digital direction.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-stretch">
              <div className={`h-full overflow-hidden rounded-[2rem] border ${theme.border} ${theme.imageFrame}`}>
                <img
                  src={sectionImages.contact}
                  alt="Creative strategy meeting"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="h-full">
                <form
                  onSubmit={handleSubmit}
                  className={`flex h-full flex-col gap-4 rounded-[1.5rem] border p-4 ${theme.border} ${theme.card}`}
                >
                  <input
                    placeholder="Your name"
                    className={`rounded-xl border p-4 outline-none ${theme.border} ${theme.input}`}
                  />
                  <input
                    placeholder="Email address"
                    type="email"
                    className={`rounded-xl border p-4 outline-none ${theme.border} ${theme.input}`}
                  />
                  <input
                    placeholder="Business name"
                    className={`rounded-xl border p-4 outline-none ${theme.border} ${theme.input}`}
                  />
                  <textarea
                    placeholder="Tell us about your business and what you want to improve online"
                    rows={6}
                    className={`rounded-xl border p-4 outline-none ${theme.border} ${theme.input}`}
                  />
                  <div className="mt-auto">
                    <button
                      type="submit"
                      className={`w-full rounded-full px-5 py-3 ${theme.buttonPrimary}`}
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <footer className={`mx-auto mt-12 max-w-6xl border-t px-6 py-10 ${theme.border}`}>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="text-sm tracking-[0.3em]">LENIA</div>
                <p className={`mt-2 ${theme.subtext}`}>Built on legacy.</p>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection("top")}
                className={`rounded-full px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 ${theme.buttonSecondary}`}
              >
                Back to top
              </button>
            </div>
          </footer>
        </main>
      </div>

      {selectedItem && (
        <DetailModal item={selectedItem} theme={theme} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}