import { TypeBenefit, SelectedPage } from "@/shared/types";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "../Common/HText";
import Benefit from "./Benefit";
import ActionButton from "../Buttons/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className={`mx-auto min-h-full w-5/6 py-20`}>
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className={`md:my-5 md:w-3/5`}
          initial="hidden_hd"
          whileInView="visible_vs"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden_hd: { opacity: 0, x: -50 },
            visible_vs: { opacity: 1, x: 0 },
          }}
        >
          <HText textTransform="uppercase">More than just gym</HText>
          <p className={`my-5 text-sm`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            soluta commodi aspernatur voluptatibus saepe sunt libero mollitia
            accusamus consectetur ea?
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.ul
          className={`mt-5 items-center justify-between gap-8 md:flex`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          // variants={{
          //   hidden: {},
          //   visible: {
          //     opacity: 1,
          //     transition: { staggerChildren: 2 },
          //   },
          // }}
        >
          {benefits.map((el: TypeBenefit) => (
            <Benefit
              key={el.title}
              icon={el.icon}
              title={el.title}
              description={el.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.ul>

        {/* GRAPHICS  AND DESCRIPTION*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <motion.div
              className="relative"
              initial="hidden_hd"
              whileInView="visible_vs"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden_hd: { opacity: 0, x: 50 },
                visible_vs: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HText textTransform="uppercase">
                    millions of happy members getting{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </motion.div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden_hd"
              whileInView="visible_vs"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden_hd: { opacity: 0, x: 50 },
                visible_vs: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                repellendus? Earum iste labore maiores deleniti omnis? Amet
                velit dolorem assumenda ab possimus impedit praesentium
                accusamus, odio quis, vero, placeat necessitatibus dicta autem
                dolor nostrum officia nulla. Obcaecati facere hic ipsum? Magni
                tenetur minus aliquam assumenda.
              </p>
              <p className="mb-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                saepe dolores in modi repellat reprehenderit enim eveniet.
                Perferendis accusantium dolorum autem tempore, veniam, harum
                atque voluptate, corporis at quia pariatur?
              </p>
            </motion.div>

            {/* BUTTON */}
            <motion.div
              className="relative mt-16"
              initial="hidden_hd"
              whileInView="visible_vs"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden_hd: { opacity: 0, x: 50 },
                visible_vs: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benefits: Array<TypeBenefit> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default Benefits;
