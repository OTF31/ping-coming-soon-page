import { MantineProvider } from "@mantine/core";
import Home from "./Home";

const App = () => {
  return (
    <MantineProvider
      theme={{
        colors: {
          _blue: [
            "#E6ECFD",
            "#C8D7FB",
            "#ADC2F9",
            "#93AFF8",
            "#7B9DF6",
            "#648DF4",
            "#4F7DF3",
            "#3A6DF2",
            "#265FF0",
            "#1451EF",
          ],
          _paleBlue: [
            "#FBFCFF",
            "#F1F5FF",
            "#E7EEFF",
            "#DDE7FF",
            "#D4E0FF",
            "#CBD9FF",
            "#C2D3FF",
            "#B9CDFF",
            "#B0C6FF",
            "#A8C0FF",
          ],
          _lightRed: [
            "#FFFBFB",
            "#FFDADD",
            "#FFBBC1",
            "#FF9EA7",
            "#FF838F",
            "#FF6A78",
            "#FF5263",
            "#FF3A4E",
            "#FF243A",
            "#FF1028",
          ],
          _gray: [
            "#FCFCFC",
            "#E7E7E7",
            "#D4D4D4",
            "#C2C2C2",
            "#B2B2B2",
            "#A4A4A4",
            "#969696",
            "#898989",
            "#7C7C7C",
            "#717171",
          ],
          _veryDarkBlue: [
            "#F0F4F7",
            "#92ADC7",
            "#537BA2",
            "#3B5773",
            "#2A3E52",
            "#1E2C3A",
            "#151F29",
            "#0C1218",
            "#070B0E",
            "#040608",
          ],
        },
        fontFamily: "Libre Franklin",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Home />
    </MantineProvider>
  );
};

export default App;
