import { FC, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

export const AutoColumn: FC<Props> = ({ children }) => (
  <Box display="grid" gridAutoRows="auto" gridRowGap="24px">
    {children}
  </Box>
);
