import { PlayCircleIcon } from "@heroicons/react/24/solid";
import Tag from "./Tag";

type CardProps = {
  title: string;
  imgPath: string;
  description?: string;
  onTagClick: (tag: string) => void;
  onPlayClick: () => void;
  tags: string[];
};

const Card = ({ title, imgPath, description, onTagClick, tags, onPlayClick }: CardProps) => {
  return (
    <div
      className="
        group
        relative
        max-w-xs
        bg-white
        border
        border-gray-200
        rounded-lg
        shadow
        py-2
        hover:shadow-lg
        transition-all
        overflow-hidden
    "
    >
      <button
        className="opacity-0 group-hover:opacity-90 transition-all absolute w-20 h-20 top-2 right-2 z-10 bg-cyan-500 bg-opacity-90 flex justify-center items-center rounded-full m-auto"
        onClick={onPlayClick}
        data-testid="play-btn"
      >
        <PlayCircleIcon className="h-10 w-10 text-orange-500" />
      </button>
      <div className="flex justify-center">
        <img className="h-full rounded-full" src={`${imgPath}`} alt={`[picture for ${title}`} />
      </div>
      <div className="p-4">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-600">
          {title}
        </h5>
        {description && (
          <p className="mb-3 text-gray-700">{description}</p>
        )}
      </div>

      <div className="px-2 flex flex-nowrap">
        {tags.map(tag => (
          <button key={tag} onClick={() => onTagClick(tag)} data-testid="tag">
            <Tag name={tag} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
