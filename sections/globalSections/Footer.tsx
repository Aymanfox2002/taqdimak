"use client";
import Link from "next/link";
import { Container } from "../../components";
import { IoLogoTumblr } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const socialLinks = [
    {
      name: "Facebook",
      href: "/",
      icon: FaFacebookF,
    },
    {
      name: "Twitter",
      href: "/",
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      href: "/",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      href: "/",
      icon: FaLinkedinIn,
    },
  ];

  const links = [
    {
      name: t("footer.links.home"),
      href: "/",
    },
    {
      name: t("footer.links.about"),
      href: "/",
    },
    {
      name: t("footer.links.services"),
      href: "/",
    },
    {
      name: t("footer.links.contact"),
      href: "/",
    },
  ];
  return (
    <footer className="pb-3">
      <Container>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex justify-center items-center mb-16">
            <IoLogoTumblr className="text-[57px] text-[var(--teal-900)]" />
          </div>
          <ul className="flex flex-col gap-4 items-center md:flex-row text-[var(--gray)] mb-8">
            {links.map(({ name, href }, i) => (
              <li key={i}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
          {/* Social Media */}
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map(({ name, href, icon: Icon }, i) => (
              <div
                key={i}
                className="flex justify-center items-center w-9 h-9 rounded-lg bg-[var(--teal-500)] btn-animation group relative cursor-pointer"
              >
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-[var(--teal-900)] group-hover:text-white transition-all duration-400 z-10"
                >
                  <Icon size={24} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] bg-[var(--teal-300)] mb-8" />
        <p className="text-center text-[var(--gray)] mb-5" dir="ltr">
          &copy; 2025 Taqdimak. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
