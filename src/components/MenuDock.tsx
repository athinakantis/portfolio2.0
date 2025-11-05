import {
  useEffect,
  type ComponentType,
  type Dispatch,
  type SetStateAction,
} from "react";
import { motion, type MotionNodeAnimationOptions } from "framer-motion";
import { MenuDock, type MenuDockItem } from "./ui/shadcn-io/menu-dock";
import {
  AtSign,
  Folder,
  FolderOpen,
  GraduationCap,
  Home,
  Moon,
  // SquareChartGantt,
  Sun,
} from "lucide-react";
import { useTheme } from "@/theme/useTheme";

const MotionIcon = ({
  Icon,
  className,
  animate,
}: {
  Icon: ComponentType<{ className?: string }>;
  className?: string;
    animate?: MotionNodeAnimationOptions["animate"];
}) => (
  <motion.span
    transition={{ duration: 0.4, ease: "linear" }}
    className="inline-flex"
    animate={animate}
  >
    <Icon className={className} />
  </motion.span>
);

const getMenuItems: (
  activeSection: string | null,
  handleThemeSwitch: () => void,
  currentTheme: "light" | "dark",
  scrollTo: (section: string) => void,
) => MenuDockItem[] = (
  activeSection,
  handleThemeSwitch,
  currentTheme,
  scrollTo
) => {

    return [
      {
        label: "home",
        icon: (props: { className?: string }) => (
          <MotionIcon
            Icon={Home}
            animate={activeSection === "home" ? { scale: 1.2 } : { scale: 1 }}
            className={props.className}
          />
        ),
        onClick: () => scrollTo("home"),
      },
      {
        label: "projects",
        icon: (props: { className?: string }) => (
          <MotionIcon
            animate={activeSection === "projects" ? { scale: 1.2 } : { scale: 1 }}
            Icon={activeSection === "projects" ? FolderOpen : Folder}
            className={props.className}
          />
        ),
        onClick: () => scrollTo("projects"),
      },
      {
        label: "studies",
        icon: (props: { className?: string }) => (
          <MotionIcon
            Icon={GraduationCap}
            animate={activeSection === "education" ? { scale: 1.2 } : { scale: 1 }}
            className={props.className}
          />
        ),

        onClick: () => scrollTo("education"),
      },
      // {
      //   label: "experience",
      //   icon: (props: { className?: string }) => (
      //     <MotionIcon
      //       Icon={SquareChartGantt}
      //       className={props.className}
      //       animate={activeSection === "experience" ? { scale: 1.2 } : { scale: 1 }}
      //     />
      //   ),
      //   onClick: () => scrollTo("experience"),
      // },
      {
        label: "contact",
        icon: (props: { className?: string }) => (
          <MotionIcon
            Icon={AtSign}
            className={props.className}
            animate={activeSection === "contact" ? { scale: 1.2 } : { scale: 1 }}
          />
        ),
        onClick: () => scrollTo("contact"),
      },

      {
        label: "dark mode",
        icon: (props: { className?: string }) => (
          <MotionIcon
            Icon={currentTheme === "light" ? Moon : Sun}
            className={props.className}
          />
        ),
        onClick: () => handleThemeSwitch(),
      },
    ];
  };

export default function Menu({
  activeSection,
  scrollTo,
}: {
  activeSection: string | null;
  setActiveSection: Dispatch<SetStateAction<string | null>>;
  scrollTo: (section: string) => void;

}) {
  const { handleThemeSwitch, currentTheme } = useTheme();
  useEffect(() => {
    // keep this for debugging — the app can remove or replace with a logger later
    console.log("active section: ", activeSection);
  }, [activeSection]);

  return (
    <MenuDock
      items={getMenuItems(
        activeSection,
        handleThemeSwitch,
        currentTheme,
        scrollTo
      )}
      className="fixed right-[50%] transform-[translateX(50%)] top-5  bg-background z-10"
      showLabels={false}
      variant="compact"
      animated={false}
      activeSection={activeSection}
    />
  );
}
