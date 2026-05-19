import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Droplets, Megaphone, QrCode, BarChart3, Store, Gift, CheckCircle2, Send, Menu, X } from "lucide-react";
import "./index.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "How It Works", "Benefits", "Sponsors"];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/30 bg-white/80 px-5 py-3 shadow-lg shadow-sky-900/10 backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-2 font-black tracking-tight text-sky-950">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-md shadow-cyan-500/30">
            <Droplets size={22} />
          </span>
          <span className="text-xl">AquaConnect</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`} className="text-sm font-semibold text-slate-600 transition hover:text-blue-600">
              {link}
            </a>
          ))}
          <a href="#sponsors" className="rounded-full bg-sky-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-950/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
            Partner With Us
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-800 md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/40 bg-white/95 p-4 shadow-xl md:hidden">
          {links.map((link) => (
            <a onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`} className="block rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-sky-50">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function BottleMockup() {
  return (
    <motion.div initial={{ y: 0 }} animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative mx-auto w-72 sm:w-80">
      <div className="absolute -left-10 top-20 h-28 w-28 rounded-full bg-cyan-300/50 blur-2xl" />
      <div className="absolute -right-14 bottom-16 h-36 w-36 rounded-full bg-blue-500/30 blur-3xl" />

      <div className="relative mx-auto h-[520px] w-52 rounded-[4rem] border border-white/70 bg-gradient-to-b from-white/80 via-cyan-100/70 to-blue-100/60 shadow-2xl shadow-blue-900/20 backdrop-blur-xl">
        <div className="absolute left-1/2 top-[-54px] h-20 w-24 -translate-x-1/2 rounded-t-3xl rounded-b-xl bg-gradient-to-b from-blue-700 to-sky-950 shadow-lg" />
        <div className="absolute left-1/2 top-[-78px] h-10 w-28 -translate-x-1/2 rounded-xl bg-sky-950" />
        <div className="absolute left-6 right-6 top-36 rounded-3xl bg-gradient-to-br from-sky-950 via-blue-700 to-cyan-500 p-5 text-white shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <Droplets size={28} />
            <QrCode size={34} />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-100">Sponsored by</p>
          <h3 className="mt-1 text-2xl font-black">Your Brand</h3>
          <p className="mt-3 text-sm text-cyan-50">Scan for offers, discounts, and product campaigns.</p>
        </div>
        <div className="absolute bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border border-white/70 bg-white/40" />
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#a5f3fc,transparent_32%),linear-gradient(135deg,#eefbff_0%,#ffffff_45%,#dff6ff_100%)] px-4 pt-32">
      <div className="absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-80px] h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center lg:text-left">
          <motion.div variants={fadeUp} className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/70 px-4 py-2 text-sm font-bold text-sky-800 shadow-sm backdrop-blur lg:mx-0">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Free Water • Smart Marketing • QR Analytics
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl font-black leading-tight tracking-tight text-sky-950 sm:text-6xl lg:text-7xl">
            Free water for people. <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">Powerful visibility</span> for brands.
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:mx-0">
            AquaConnect gives free mineral water bottles to the public and funds the cost through company promotions printed on the bottle labels, QR campaigns, discount codes, and measurable engagement reports.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a href="#sponsors" className="rounded-full bg-gradient-to-r from-sky-950 to-blue-700 px-8 py-4 text-center font-bold text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-1">
              Start a Sponsor Campaign
            </a>
            <a href="#how-it-works" className="rounded-full border border-sky-200 bg-white/70 px-8 py-4 text-center font-bold text-sky-950 shadow-lg shadow-sky-900/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white">
              See How It Works
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 grid grid-cols-3 gap-3 rounded-3xl border border-white/50 bg-white/60 p-4 shadow-xl shadow-sky-950/10 backdrop-blur-xl sm:max-w-xl lg:mx-0">
            {[
              ["500K", "Pilot bottles"],
              ["50", "Locations"],
              ["12", "Month pilot"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/70 p-4 text-center">
                <div className="text-2xl font-black text-blue-700">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative">
          <BottleMockup />
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ label, title, text }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-600">{label}</p>
      <h2 className="mt-3 text-4xl font-black tracking-tight text-sky-950 sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle label="About AquaConnect" title="A new promotional channel built around everyday value" text="We connect consumers, supermarkets, and sponsors through free branded water bottles." />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Gift, title: "Public receives free water", text: "Customers get a useful product with clear promotional offers and QR access." },
            { icon: Megaphone, title: "Companies get attention", text: "Sponsors advertise on labels and connect campaigns to QR codes or discount offers." },
            { icon: Store, title: "Retailers gain footfall", text: "Supermarkets can offer a positive free-product experience without direct cost." },
          ].map((item) => (
            <motion.div variants={fadeUp} key={item.title} className="rounded-[2rem] border border-sky-100 bg-gradient-to-b from-white to-sky-50 p-8 shadow-lg shadow-sky-900/5">
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-700 text-white shadow-lg shadow-blue-500/20">
                <item.icon size={26} />
              </div>
              <h3 className="text-2xl font-black text-sky-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["01", "Sponsor selects campaign", "A company chooses brand awareness, QR promotion, discount code, or product launch advertising."],
    ["02", "Bottle labels are designed", "AquaConnect creates attractive labels with sponsor branding, QR codes, and clear calls to action."],
    ["03", "Water reaches public locations", "Free bottles are distributed through supermarkets, events, campuses, or public partner locations."],
    ["04", "Results are measured", "Sponsors receive engagement insights from QR scans, redemptions, and campaign performance."],
  ];

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-sky-950 px-4 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle label="How It Works" title="Simple, visible, and measurable" text="AquaConnect turns a free bottle of water into a real-world marketing touchpoint." />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([num, title, text]) => (
            <motion.div variants={fadeUp} key={num} className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur-xl">
              <div className="text-5xl font-black text-cyan-300">{num}</div>
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-sky-100">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  const cards = [
    { icon: Droplets, title: "Free water access", text: "People receive a practical free product instead of just seeing another ad." },
    { icon: QrCode, title: "QR campaign engagement", text: "Each label can connect customers to coupons, landing pages, and product launches." },
    { icon: BarChart3, title: "Analytics for sponsors", text: "Track scans, engagement, and campaign performance to prove marketing value." },
    { icon: CheckCircle2, title: "Win-win model", text: "Customers benefit, companies promote, and retailers gain a customer-friendly attraction." },
  ];

  return (
    <section id="benefits" className="bg-[linear-gradient(180deg,#ffffff_0%,#ecfeff_100%)] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle label="Benefits" title="Marketing people actually appreciate" text="AquaConnect gives brands visibility through something useful, positive, and easy to remember." />

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <motion.div variants={fadeUp} key={card.title} className="group rounded-[2rem] bg-white p-7 shadow-xl shadow-sky-900/8 transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                <card.icon size={26} />
              </div>
              <h3 className="mt-6 text-xl font-black text-sky-950">{card.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Sponsors() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    campaignType: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(false);
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/sponsors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitted(true);
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        campaignType: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="sponsors" className="bg-white px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-[2rem] bg-gradient-to-br from-sky-950 via-blue-800 to-cyan-600 p-8 text-white shadow-2xl shadow-blue-900/20 lg:p-10">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">For Sponsors</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Promote your brand with every bottle</h2>
          <p className="mt-6 text-lg leading-8 text-sky-50">
            Companies can use AquaConnect for brand awareness, QR campaigns, discount offers, product launches, and measurable customer engagement.
          </p>

          <div className="mt-8 grid gap-3">
            {["Logo and campaign message on bottle label", "QR code linked to offer or landing page", "Coupon and scan engagement tracking", "Pilot campaign support and reporting"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 className="shrink-0 text-cyan-200" size={22} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-2xl shadow-sky-900/10 sm:p-8">
          <h3 className="text-3xl font-black text-sky-950">Connect with us</h3>
          <p className="mt-2 text-slate-600">Send your company details and campaign idea.</p>

          {submitted && (
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-semibold text-emerald-700">
              Thank you! Your sponsor request has been saved.
            </div>
          )}

          {error && (
            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 font-semibold text-red-700">
              {error}
            </div>
          )}

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="font-bold text-slate-700">Company Name</span>
              <input name="companyName" value={formData.companyName} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Example: FreshFoods Oy" />
            </label>
            <label className="block">
              <span className="font-bold text-slate-700">Contact Person</span>
              <input name="contactPerson" value={formData.contactPerson} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="font-bold text-slate-700">Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="name@company.com" />
            </label>
            <label className="block">
              <span className="font-bold text-slate-700">Campaign Type</span>
              <select name="campaignType" value={formData.campaignType} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100">
                <option value="">Select one</option>
                <option value="Brand Awareness">Brand Awareness</option>
                <option value="QR Code Campaign">QR Code Campaign</option>
                <option value="Discount Code Promotion">Discount Code Promotion</option>
                <option value="Product Launch">Product Launch</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="font-bold text-slate-700">Message</span>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Tell us about your marketing goal..." />
            </label>
          </div>

          <button disabled={loading} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-950 to-blue-700 px-8 py-4 font-black text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Submitting..." : "Submit Sponsor Request"} <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-sky-950 px-4 py-10 text-center text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-2 text-2xl font-black">
          <Droplets className="text-cyan-300" /> AquaConnect
        </div>
        <p className="mt-3 text-sky-200">Free water for people. Smart promotion for companies.</p>
        <p className="mt-6 text-sm text-sky-300">© 2026 AquaConnect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function AquaConnectWebsite() {
  return (
    <main className="min-h-screen overflow-x-hidden font-sans text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Benefits />
      <Sponsors />
      <Footer />
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AquaConnectWebsite />
  </React.StrictMode>
);
