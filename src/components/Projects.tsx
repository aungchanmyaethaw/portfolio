import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export interface ProjectProps {
  image: string;
  title: string;
  content: string;
  techs: string[];
  git: string;
  deploy: string;
}

const projects: ProjectProps[] = [
  {
    image: "/needles.png",
    title: "Needles Tattoo Studio",
    content:
      "This website features a responsive design that adapts to different screen sizes, making it accessible on desktop, tablet, and mobile devices.The website includes several pages, including a home page, a gallery page showcasing the studio's work, an artist page with information about the artists and their experience, and a contact page with a form for customers to get in touch.",
    techs: ["Vanilla JS", "Bootstrap", "SCSS"],
    git: "https://github.com/aungchanmyaethaw/needles",
    deploy: "https://aungchanmyaethaw.github.io/needles/",
  },
  {
    image: "/git-hub-jobs.png",
    title: "Github Jobs",
    content:
      "This is a React.js application that allows users to search for job listings using the GitHub Jobs API.It offers several features that enhance the user experience, including the ability to search job listings by location, description, or full-time/part-time positions. Users can also filter results based on job type, location, and company name, and browse through multiple pages of job listings using pagination support.",
    techs: ["ReactJS", "Tailwind CSS", "Axios"],
    git: "https://github.com/aungchanmyaethaw/github-jobs",
    deploy: "https://github-jobs-seven-ochre.vercel.app/",
  },
  {
    image: "/nextjs-social-media-app.png",
    title: "Social Media App",
    content:
      "This is a Next.js project that aims to create a social media application similar to Facebook.Users can  log in with Google and securely authenticate into the application. Each user has a profile page where they can view and edit their personal information, such as username and profile image. The profile page also displays the user's posts.Users can create new posts, including text and images. They can also like, comment on posts.",

    techs: ["Next.js", "Tailwind CSS", "Prisma", "Supabase", "Cloudinary"],
    git: "https://github.com/aungchanmyaethaw/nextjs-social-media-app",
    deploy: "https://nextjs-social-media-app.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      className="container lg:max-w-4xl  xl:max-w-full  px-4  mx-auto md:px-8 xl:px-[8rem] py-[4rem] mt-4 overflow-x-hidden"
      id="projects"
    >
      <motion.div
        className="flex items-center justify-end gap-2 mb-16"
        initial={{ x: "-200", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="w-[20rem] mt-2 h-[1px] bg-secondary bg-opacity-50" />
        <motion.h2 className="text-xl font-semibold md:text-2xl whitespace-nowrap lg:text-3xl font-heading text-secondary">
          Projects
        </motion.h2>
      </motion.div>
      <ul className="flex flex-col gap-[2rem]  md:gap-[3rem]  lg:gap-[4rem]  lg:max-w-4xl xl:max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </ul>
    </section>
  );
}
