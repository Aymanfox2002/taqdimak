import { HiMiniHome } from "react-icons/hi2";
import { RiTeamFill } from "react-icons/ri";
import { TbPackages } from "react-icons/tb";
import { FaCircleInfo } from "react-icons/fa6";
import { TFunction } from "i18next";


export const getMenuItems = (t: TFunction) => [
  {
    label: t("header.nav.home"),
    icon: (
      <HiMiniHome
        aria-hidden="true"
        className="pe-3 text-[var(--heading-black)] text-3xl"
      />
    ),
    href: "/",
  },
  {
    label: t("header.nav.services"),
    href: "/services",
    icon: (
      <TbPackages
        aria-hidden="true"
        className="pe-3 text-[var(--heading-black)] text-3xl"
      />
    ),
    children: [
      { label: t("header.nav.servicesDropdown.service-1"), href: "/" },
      { label: t("header.nav.servicesDropdown.service-2"), href: "/" },
      { label: t("header.nav.servicesDropdown.service-3"), href: "/" },
      { label: t("header.nav.servicesDropdown.service-4"), href: "/" },
      { label: t("header.nav.servicesDropdown.service-5"), href: "/" },
      { label: t("header.nav.servicesDropdown.service-6"), href: "/" },
      { label: t("header.nav.servicesDropdown.service-7"), href: "/" },
      { label: t("header.nav.servicesDropdown.service-8"), href: "/" },
    ],
  },
  {
    label: t("header.nav.about"),
    icon: (
      <RiTeamFill
        aria-hidden="true"
        className="pe-3 text-[var(--heading-black)] text-3xl"
      />
    ),
    href: "/about",
  },
  {
    label: t("header.contact"),
    icon: (
      <FaCircleInfo
        aria-hidden="true"
        className="pe-3 text-[var(--heading-black)] text-3xl"
      />
    ),
    href: "/contact",
  },
];
