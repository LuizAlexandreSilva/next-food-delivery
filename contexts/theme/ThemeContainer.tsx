import { CSSReset, theme } from "@chakra-ui/core";
import { ThemeProvider } from "emotion-theming";

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
}

export default ThemeContainer;