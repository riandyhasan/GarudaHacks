import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Gilroy",
    body: "Gilroy",
  },
  colors: {
    brand: {
      100: "#5A38FD",
      200: "#64A1F4",
      300: "#BFD6F6",
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
