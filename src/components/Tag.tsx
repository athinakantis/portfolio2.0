import { cn } from "@/lib/utils"

export default function Tag({ title, className }: { title: string, className?: string }) {
  return (
    <span className={cn("py-1 px-2 bg-secondary text-muted-foreground rounded-md leading-none h-fit", className)}>{title}</span>
  )
}
