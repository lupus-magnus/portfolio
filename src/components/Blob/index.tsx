import React from "react";
import { motion } from "framer-motion";

import * as S from "./styles";
import { theme } from "../../styles/theme";

export const HeroBlob: React.FC = () => {
  return (
    <>
      <S.Blob
        width="1023"
        height="749"
        viewBox="0 0 1023 749"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{
            rotate: [-30, 0, 0],
            pathLength: [0, 1, 1],
            opacity: [0, 1, 1],
            fill: [theme.colors.background, theme.colors.background, "#333"],
          }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          d="M267.428 634.348C193.925 587.658 121.724 553.127 72.704 505.475C24.972 456.887 0.420629 394.243 0.353584 331.574C0.286538 268.904 24.7039 206.208 60.719 143.499C98.0228 80.7897 146.923 17.1323 221.651 3.95711C295.089 -10.152 395.642 26.2198 474.281 55.1322C551.63 83.1105 607.063 102.694 683.106 114.773C760.439 127.785 858.381 132.357 917.696 166.902C977.011 201.448 996.41 265.967 1010.66 336.105C1024.91 407.178 1034.01 482.933 992.837 540.035C951.661 597.137 860.207 634.649 768.755 674.033C677.303 713.416 587.143 755.604 503.372 747.276C419.601 738.947 342.219 680.101 267.428 634.348Z"
          fill="none"
          stroke="#333333"
          strokeWidth={5}
        />
      </S.Blob>
    </>
  );
};
