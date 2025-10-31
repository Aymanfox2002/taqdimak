"use client";
import Link from "next/link";
import { Container, SocialMediaLinks } from "../../components/index";
import { IoLogoTumblr } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { socialLinks } from "@/data/SocialLinks";
import { getMenuItems } from "@/data/menuItems";

const Footer = () => {
  const { t } = useTranslation();
  const links = getMenuItems(t);

  return (
    <footer className="pb-3">
      <Container>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex justify-center items-center mb-16">
            <IoLogoTumblr className="text-[57px] text-[var(--teal-900)]" />
          </div>
          <ul className="flex flex-col gap-4 items-center md:flex-row text-[var(--gray)] mb-8">
            {links.map(({ label, href }, i) => (
              <li key={i}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          {/* Social Media */}
          <ul className="flex justify-center gap-4 mb-12">
            {socialLinks.map(({ name, href, icon }, i) => (
              <li key={i}>
                <SocialMediaLinks href={href} icon={icon} label={name} />
              </li>
            ))}
          </ul>
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
