export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: "About", href: "tools" },
  { name: "Projects", href: "projects" },
  { name: "Tools", href: "tools" },
  { name: "Contact", href: "contact" },
];

export const footerNavLinks: NavLink[] = [
  { name: "Home", href: "hero" },
  { name: "About", href: "tools" },
  { name: "Work", href: "projects" },
  { name: "Contact", href: "contact" },
];
