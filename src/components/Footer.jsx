import { contactInfo, footerCompany, footerServices } from "../data/content.js";
import { Dribbble, Instagram, LinkedIn, Mail, Phone, Pin, XSocial } from "./icons.jsx";

const socials = [
  { label: "X (Twitter)", Icon: XSocial },
  { label: "LinkedIn", Icon: LinkedIn },
  { label: "Instagram", Icon: Instagram },
  { label: "Dribbble", Icon: Dribbble },
];

export default function Footer() {
  return (
    <footer className="bg-[#04091a] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div className="flex flex-col gap-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 font-display text-lg font-bold text-white">
                V
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">VizNerd</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed">
              A digital agency helping companies and organizations gain visibility and online
              presence — and turn visitors into clients.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#top"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-brand-500 hover:bg-brand-600 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {footerCompany.map((item) => (
                <li key={item}>
                  <a href="#top" className="transition-colors hover:text-brand-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {footerServices.map((item) => (
                <li key={item}>
                  <a href="#services" className="transition-colors hover:text-brand-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <Pin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {contactInfo.address}
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 transition-colors hover:text-brand-400">
                  <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-brand-400">
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm sm:flex-row">
          <p>© 2025 VizNerd Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-brand-400">Privacy Policy</a>
            <a href="#top" className="transition-colors hover:text-brand-400">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
