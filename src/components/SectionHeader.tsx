import { motion } from "motion/react";
import Tag from "./Tag";

type SectionHeaderProps = {
  title: string;
  tag: string;
}

export default function SectionHeader(props: SectionHeaderProps) {
  const { tag, title } = props;
  return (
    <motion.div className="w-full text-center" initial={{ filter: "blur(3px)" }} whileInView={{ filter: "blur(0px)" }} viewport={{ amount: 0.8 }}>
      <Tag title={tag} className="capitalize font-semibold" />
      <h2>{title}</h2>
    </motion.div>
  )
}
