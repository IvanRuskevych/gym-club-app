// type Props = {
//   name: string;
//   image: string;
//   description?: string;
// };


import { TypeClass } from "../../shared/types";

const Class = ({ name, image, description }: TypeClass) => {
  const overlayStyles = `absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center
  justify-center whitespace-normal bg-primary-500
  p-5 text-center text-white opacity-0 transition
  duration-500 hover:opacity-90`;

  return (
    <li className="relative mr-5 inline-block h-[380px] w-[450px] ">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${name}`} width={450} height={338} />
    </li>
  );
};

export default Class;
