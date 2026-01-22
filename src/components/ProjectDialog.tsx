import type { projects } from "@/data/projects";
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/shadcn-io/dialog/dialog";

type ProjectDialogProps = {
  project: (typeof projects)[number];
  onClose: () => void;
};

export default function ProjectDialog(props: ProjectDialogProps) {
  const { project, onClose } = props;

  return (
    <Dialog open>
      <DialogContent
        className="border"
        showCloseButton={false}
      >
        <DialogHeader>
          <h2>{project.title}</h2>
        </DialogHeader>
        {/* <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4"></div> */}
        {project.projectDetails}
        <DialogFooter className="sm:justify-start">
          <DialogClose
            asChild
            className="absolute top-4 right-4"
          >
            <button
              className="hover:bg-muted p-2!"
              type="button"
              onClick={onClose}
            >
              <X size={15} />
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  );
}
