import Root from "@/layout/Root";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Root>
      <div className="mx-auto w-fit border p-6 rounded-md top-25 relative">
        <h2>Something went wrong</h2>
        <Link to="/" className="inline-link mt-2 ml-auto">Home<ChevronRight /></Link>
      </div>
    </Root>
  );
}
