import styled from "styled-components";
import { motion } from "framer-motion";

export const buttonAnimation = {
  boxShadow: "3px 3px 0px 0px #4979ee",
  color: "#fff",
  x: "-3px",
  y: "-3px",
};

export const Button = styled(motion.button)`
  padding: 0.5em 1.25em;
  color: #fff;
  font-weight: 600;
  border-radius: 6px;
  border: 2px solid #4979ee;
  font-family: "Open Sans", "sans-serif";
`;
