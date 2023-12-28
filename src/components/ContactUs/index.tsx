import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "../Common/HText";
import { useForm } from "react-hook-form";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mt-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event: any) => {
    const isValid = await trigger();
    if (!isValid) {
      event.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText textTransform="uppercase">
            <span className="text-primary-500">join now</span> to get in shape
          </HText>
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            beatae fugit ducimus reprehenderit nemo quisquam modi nisi, nostrum
            nam quia necessitatibus autem cupiditate ab qui corporis unde velit
            eligendi saepe.
          </p>
        </motion.div>

        {/* FORM and IMAGE */}
        <div className="mt-10 flex w-3/5 gap-8">
          <motion.div className="w-4/5">
            <form
              action="https://formsubmit.co/fullstack.dev.goit@gmail.com"
              method="POST"
              target="_blank"
              onSubmit={onSubmit}
            >
              {/* INPUT-NAME */}
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />

              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              {/* INPUT-EMAIL */}
              <input
                type="text"
                className={inputStyles}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />

              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "pattern" && "Invalid email address."}
                </p>
              )}

              {/* TEXTAREA-MESSAGE */}

              <textarea
                placeholder="MESSAGE"
                cols={5}
                rows={5}
                className={inputStyles}
                {...(register("message"), { required: true, maxLength: 2000 })}
              ></textarea>

              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              {/* BUTTON-SUBMIT */}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              className="min-w-[6rem] max-w-[6rem]"
              alt="contact-us-page-graphic"
              src={ContactUsPageGraphic}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
