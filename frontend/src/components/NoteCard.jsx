import { FilePen } from "lucide-react";
import { Link } from "react-router";

const NoteCard = ({ note }) => {
  return (
    <Link to={`/note/${note._id}`}
      className="bg-base-200 w-full h-50 p-6 border-t-4 border-solid border-primary rounded-xl flex flex-col
     justify-between hover:cursor-pointer hover:shadow-2xl hover:bg-base-100 hover:border-accent transition-shadow"
    >
      <h1 className="text-2xl font-bold text-primary">{note.title}</h1>
      <p>{note.content}</p>
      <div className="text-sm flex items-center justify-between">
        <p>Created at: {new Date(note.createdAt).toLocaleDateString()}</p>
        <FilePen className="size-5" />
      </div>
    </Link>
  );
};

export default NoteCard;
