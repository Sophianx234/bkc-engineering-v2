import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

type projectItemProps = {
  project: {
    id: string;
    systemSize: string;
    location: string;
    imageUrl: string;
  };
  index: number;
};

function ProjectItem({ project, index }: projectItemProps) {
  // Determine if the item is odd or even to create the Z-pattern
  const isEven = index % 2 === 0;

  return (
    // Alternates row direction based on index. Stacks on mobile, splits 50/50 on desktop.
    <div className={`flex w-full py-8 flex-col gap-8 md:flex-row items-center ${!isEven ? "md:flex-row-reverse" : ""}`}>
      
      <motion.div
        key={project.id}
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Premium Apple-like easing curve
        }}
      >
        {/* Image Container with subtle hover zoom */}
        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-800">
          
          {/* Skeleton Loader: Gives the illusion of speed while the image downloads */}
          <div className="absolute inset-0 animate-pulse bg-slate-700/50" />

          <Image
            src={project.imageUrl}
            alt={`Solar installation in ${project.location}`}
            fill
            // PRELOADS the first 4 images instantly, skipping Next.js lazy-loading
            priority={index < 4} 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform "
          />
        </div>

        {/* Card Footer */}
        <div className="mt-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="font-medium">{project.id}</span>
            <span className="text-slate-500">|</span>
            <span>{project.systemSize}</span>
          </div>

          <div className="flex items-center gap-2 font-medium text-white">
            <MapPin size={16} strokeWidth={2.5} className="text-yellow-400" />
            <span>{project.location}</span>
          </div>
        </div>
      </motion.div>

      {/* Empty block to fill the other half of the grid, pushing the card to the correct side */}
      <div className="hidden md:block md:w-1/2">
        {/* If you ever want text beside the image, it goes in here! */}
      </div>

    </div>
  );
}

export default ProjectItem;