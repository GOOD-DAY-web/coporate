import React from "react";
import { motion } from "framer-motion";

interface Props {
  props: React.ReactElement;
}

export const FramerMotion = ({ props }: Props) => {
  return (
    <motion.div
      className={""}
      variants={{
        offscreen: {
          y: 100,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0 }}
    >
      <p className={""}>{props}</p>
    </motion.div>
  );
};
