import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { StyledApp } from "../components/StyledApp";

const theme = extendTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </ChakraProvider>
  );
}

export default MyApp;
