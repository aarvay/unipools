import { Box } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  children?: React.ReactNode;
};

export const StyledApp: FC<Props> = ({ children }) => (
  <Box
    display="flex"
    flexFlow="column"
    alignItems="center"
    minH="100vh"
    overflowX="hidden"
  >
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingTop: "40px",
        alignItems: "center",
        flex: 1,
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </Box>
  </Box>
);
