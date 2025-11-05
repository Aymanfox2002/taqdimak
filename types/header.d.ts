export interface MenuItem {
  label: string;
  href: string;
  icon?: ReactNode;
  children?: { label: string; href: string }[];
}

export interface DesktopNavProps {
  menuItems: MenuItem[];
}

export interface MegaMenuProps {
  menuItems: MenuItem[];
}

export interface MobileNavMenuProps {
  menuItems: MenuItem[];
  lang: string;
  setLang: any;
}