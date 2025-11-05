import defaultImg from "@/assets/studies_default.png"
import { motion } from "motion/react";

type StudiesCardProps = {
  img: string;
  school: string;
  program: string;
  timespan: string;
  description: string;
  index: number;
  count: number;
}

export default function StudiesCard({ props }: { props: StudiesCardProps }) {
  const { img, school, program, timespan, description, index, count } = props;
  return (
    <motion.div className="flex gap-4 relative" initial={{ filter: "blur(3px)" }} whileInView={{ filter: "blur(0px)" }} viewport={{ amount: 0.8 }}>
      
      <img loading="lazy" src={img || defaultImg} width={80} height={80} className="shrink-0 h-fit min-h-[80px] rounded-full z-2 outline-none border-1 border border-solid dark:border-none" />

      <div>
        <h3 className="font-semibold text-lg">{`${program} - ${school}`}</h3>
        <p className="text-sm mb-2 text-muted-foreground">{timespan}</p>
        <p className="text-muted-foreground">{description}</p>
        {index !== count && <div className="w-[1px] h-full absolute left-[40px] bg-ring top-[40px]" />}
      </div>
    </motion.div>
  )
}
