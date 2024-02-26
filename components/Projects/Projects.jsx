import ProjectShowcase from "./ProjectShowcase";

const entries = [
  {
    title: "Reuse App",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Styled Components",
      "Vercel",
      "NextAuth",
      "Cloudinary",
      "useSWR",
      "MongoDB",
      "Font Awesome",
      "Fuse.js",
    ],
    websiteLink: "https://reuse-app.vercel.app",
    repositoryLink: "https://github.com/kevinldg/reuse-app",
    image: "reuse-screenshot.jpg",
  },
  {
    title: "Cloudified Bookmarks",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Styled Components",
      "NextAuth",
      "MongoDB",
      "Font Awesome",
    ],
    websiteLink: "/",
    repositoryLink: "https://github.com/kevinldg/cloudified-bookmarks",
    image: "cb-screenshot.jpg",
  },
];

export default function Projects() {
  return (
    <div className="desktop:px-[25vw] px-8 py-8 bg-dark-300 flex flex-col gap-4">
      <h3 className="text-2xl font-bold">My Projects</h3>
      <div className="flex desktop:flex-row flex-wrap flex-col gap-8 justify-center">
        {entries.map((entry, index) => (
          <ProjectShowcase
            key={index}
            title={entry.title}
            techStack={entry.techStack}
            websiteLink={entry.websiteLink}
            repositoryLink={entry.repositoryLink}
            image={entry.image}
          />
        ))}
      </div>
    </div>
  );
}
