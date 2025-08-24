import { Github, Linkedin, Twitter } from "lucide-react";

export interface SocialLink {
  icon: any;
  href: string;
  label: string;
  color?: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/netizen-om",
    label: "GitHub",
    color: "hover:bg-gray-500/10 hover:border-gray-500/30",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/om-borisagar-754591314/",
    label: "LinkedIn",
    color: "hover:bg-blue-500/10 hover:border-blue-500/30",
  },
  {
    icon: Twitter,
    href: "https://x.com/_om088",
    label: "Twitter",
    color: "hover:bg-sky-500/10 hover:border-sky-500/30",
  },
];
