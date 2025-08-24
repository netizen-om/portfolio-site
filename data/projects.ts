export interface Project {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string | null;
  technologies: string[];
  image: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Pravya AI",
    description: "The AI Interview Practice Platform is a full-stack web-based application designed to help students and job seekers prepare for real-world interviews in both technical and behavioral domains.",
    githubUrl: "https://github.com/netizen-om/Pravya-AI",
    liveUrl: null,
    technologies: ["Nextjs", "Typescript", "neonDB", "NextAuth", "Docker", "Langchain", "PostgreSQL", "QdrantDB"],
    image: "/placeholder.svg?height=300&width=400",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "VIDTUBE Backend",
    description: "Developed a full-featured backend system combining YouTube-like video management with a Twitter-style tweet system.",
    githubUrl: "https://github.com/netizen-om/VIDTUBE",
    liveUrl: null,
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    image: "/placeholder.svg?height=300&width=400",
    gradient: "from-green-500/20 to-blue-500/20"
  },
  {
    id: 3,
    title: "Cloudinary - SaaS",
    description: "Developed a SaaS platform for AI-powered video and image processing using Next.js and TypeScript, enabling users to upload, manage, and optimize media files seamlessly.",
    githubUrl: "https://github.com/netizen-om/cloudinary-SaaS",
    liveUrl: "https://cloudsnap-pi.vercel.app/home",
    technologies: ["Nextjs", "Typescript", "Prisma", "NeonDB", "PostgreSQL", "Clerk"],
    image: "/placeholder.svg?height=300&width=400",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];
