import defaultImg from "@/assets/experience_default.png"
import { motion } from "motion/react";

type ExperienceCardProps = {
  img: string;
  workPlace: string;
  workTitle: string;
  description: string;
  index: number;
  count: number;
}

export default function ExperienceCard({ props }: { props: ExperienceCardProps }) {
  const { img, workPlace, workTitle, description, index, count } = props;
  return (
    <motion.div className="flex gap-4 relative" initial={{ filter: "blur(3px)" }} whileInView={{ filter: "blur(0px)" }} viewport={{ amount: 0.8 }}>
      <img src={img || defaultImg} width={80} height={80} className="shrink-0 h-fit min-h-[80px] rounded-full z-2 outline-none border-1 border border-solid dark:border-none" />

      <div>
        <h3 className="font-semibold text-lg">{`${workPlace} - ${workTitle}`}</h3>
        <p className="text-muted-foreground">{description}</p>
        {index !== count && <div className="w-[1px] h-full absolute left-[40px] bg-ring top-[40px]"/>}
      </div>
    </motion.div>
  )
}
