import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Home from "./pages/home"

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
)
