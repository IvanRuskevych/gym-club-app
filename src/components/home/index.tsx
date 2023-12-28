import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";

import HomePageText from "@/assets/HomePageText1.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

import ActionButton from "../Buttons/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  return (
    <section id="home" className={`bg-gray-20 gap-16 py-10 md:h-full md:pb-0`}>
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className={`mx-auto  w-5/6 items-center justify-center md:flex md:h-5/6`}
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* IMAGE */}
        <div
          className={`flex basis-2/5 justify-center md:z-10 md:mr-40 md:mt-10 md:justify-items-end`}
        >
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
        {/* MAIN HEADER */}
        <div className={`z-10 mt-32 md:basis-3/5`}>
          {/* HEADINGS */}
          <motion.div
            className={`md:-mt-20`}
            initial="hidden_hd"
            whileInView="visible_vs"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden_hd: { opacity: 0, x: 50 },
              visible_vs: { opacity: 1, x: 0 },
            }}
          >
            {/* створив обгортку <div className={`relative`}> щоб використати relative/absolute */}
            <div className={`relative`}>
              <div
                className={`before:absolute before:-left-20 before:top-[-60px] before:z-[-1] md:before:content-evolvetext`}
              >
                {/* <h1 className={`text-[90px] font-bold uppercase `}>Gym Club</h1> */}
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className={`mt-8 text-sm`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate saepe similique fugit dolorem sed molestias praesentium
              amet, ea rem perspiciatis officia tenetur, inventore architecto
              dolorum!
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className={`mt-8 flex items-center gap-8`}
            initial="hidden_hd"
            whileInView="visible_vs"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden_hd: { opacity: 0, x: 50 },
              visible_vs: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              href={`#${SelectedPage.ContactUs}`}
              className={`hover: text-sm font-bold text-primary-500 underline hover:text-secondary-500`}
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className={`h-[150px] w-full bg-primary-100 py-10`}>
          <div className={`mx-auto w-5/6`}>
            <ul className={`flex w-3/5 items-center justify-between gap-8`}>
              <li>
                <img alt="redbull-sponsor" src={SponsorRedBull} />
              </li>
              <li>
                <img alt="forbes-sponsor" src={SponsorForbes} />
              </li>
              <li>
                <img alt="fortune-sponsor" src={SponsorFortune} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
