import NeonDBIcon from "@/components/icons/NeonDBIcon";
import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiShadcnui,
  SiTailwindcss,
  SiReactquery,
  SiMaterialdesign,
  SiDaisyui,
  SiNodedotjs,
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiDrizzle,
  SiRedis,
  SiDocker,
  SiSocketdotio,
  SiWebrtc,
  SiServerless,
  SiLangchain,
  SiGit,
  SiGithub,
  SiPostman,
  SiPosthog,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export interface Technology {
  name: string;
  icon: React.ComponentType<any>;
}

export const frontendTechs: Technology[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Material UI", icon: SiMaterialdesign },
  { name: "Daisy UI", icon: SiDaisyui },
  { name: "Shadcn UI", icon: SiShadcnui },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "React Query", icon: SiReactquery },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
];

export const backendTechs: Technology[] = [
  { name: "Nextjs", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Mongoose", icon: SiMongoose },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "NeonDB", icon: NeonDBIcon },
  { name: "MySQL", icon: SiMysql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Drizzle", icon: SiDrizzle },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker },
  { name: "Socket.io", icon: SiSocketdotio },
  { name: "WebRTC", icon: SiWebrtc },
  { name: "Serverless", icon: SiServerless },
  { name: "Langchain", icon: SiLangchain },
];

export const otherTechs: Technology[] = [
  { name: "GitHub", icon: SiGithub },
  { name: "Git", icon: SiGit },
  { name: "VS code", icon: VscVscode },
  { name: "Pastman", icon: SiPostman },
  { name: "PostHog", icon: SiPosthog },
];
