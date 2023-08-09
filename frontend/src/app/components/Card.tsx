import Image from "next/image";
import { CharacterInterface } from "../interfaces";
import { StatusColor } from "../constants";

interface Props {
  item: CharacterInterface;
}

const Card = ({ item }: Props) => {
  return (
    <div className="relative">
      <Image
        className="rounded-md"
        src={item.image}
        alt={item.name}
        style={{
          objectFit: "cover",
        }}
        width={200}
        height={200}
      />

      <div className="absolute top-1 ml-2 bg-purple-700 bg-opacity-40 backdrop-blur-lg rounded flex flex-row items-center">
        <span className={`rounded h-2 w-2 ml-2 ${StatusColor[item.status]}`} />
        <span className="ml-2 mr-2">{item.status}</span>
      </div>

      <div className="absolute bottom-1 ml-3 bg-purple-700 bg-opacity-40 backdrop-blur-lg rounded">
        <p className="text-gray-100 pl-2 pr-2 sm:w-32 truncate">{item.name}</p>
      </div>
    </div>
  );
};

export default Card;
