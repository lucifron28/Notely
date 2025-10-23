import { Link } from "react-router";
import { PlusIcon, NotebookPen } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 align-center justify-center">
            <NotebookPen className="size-7 text-accent"/>
            <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
              Notely
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5 " />
              <span className="">New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
