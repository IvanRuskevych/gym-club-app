import { motion } from "framer-motion";
import Class from "./Class";

import image1 from "../../assets/image-01.png";
import image2 from "../../assets/image-02.png";
import image3 from "../../assets/image-03.png";

import HText from "../Common/HText";
import { SelectedPage, TypeClass } from "../../shared/types";

const classes: Array<TypeClass> = [
  {
    name: "Tennis Training Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Swimming Training Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    image: image2,
  },
  {
    name: "Yoga Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Tennis Training Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Swimming Training Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    image: image2,
  },
  {
    name: "Yoga Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText textTransform="uppercase">our classes</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              eaque quisquam maxime saepe cumque. Esse, provident aperiam
              dolores facere, maiores laborum dolor ut vero ullam ad maxime
              voluptates magnam quo quaerat in, temporibus dignissimos cumque
              fuga nam animi illum vitae.
            </p>
          </div>

          <div className="over mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="whitespace-nowrap">
              {classes.map((el: TypeClass, idx) => (
                <Class
                  key={`${el.name}-${idx}`}
                  name={el.name}
                  image={el.image}
                  description={el.description}
                />
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
