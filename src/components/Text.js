import React from "react";

// type Props = {
//   child?: any
// };

const Text = ({ ...args }) => {
  return <span {...args} />;
};

export default Text;
