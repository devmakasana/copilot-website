/* eslint-disable max-len */
import "../styles/index.css";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import Script from "next/script";
import { useRouter } from "next/router";
import SEO from "../next-seo.config";
import { styletron } from "../styletron";
import { initAnalytics, setAnalyticUser } from "../services/analyticsService";
import { GTM_ID, pageview } from "../lib/gtm";

const GlobalStyle = createGlobalStyle`
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bagoss', sans-serif;
  }
  :root {
    // eslint-disable-next-line max-len, max-len
    --shadowColor: 0px 1px 3px rgba(10, 10, 46, 0.1), 0px 3px 14px rgba(10, 10, 46, 0.04), 0px 8px 32px rgba(10, 10, 46, 0.08), 0px 30px 84px rgba(10, 10, 46, 0.1);
    --shadowCard:  0px 3px 10px rgba(0, 0, 0, 0.1);
    --inputBoxShadow: 0 0 0 3px #afcdff;
  }
`;

const theme = {
  fontfamily: {
    Bagoss: "Bagoss",
    Everett: "Everett",
  },
  colors: {
    primary: "#09AA6C",
    title: "#131313",
    body: "#4C4C4C",
    lightgray: "#757575",
    midiumgray: "#5B5B5B",
    black: "#000000",
    whiteColor: "#FFFFFF",
    neutral: "#F3F3F2",
    darkPrimary: "#2e69ce",
    textColor: "#424242",
    lightDark: "#333333",
    greendark: "#00160E",
    greenmiddark: "#003F27",
    greenmidlight: "#7DDAA0",
    greenlight: "#E3FFEE",
    blueprimary: "#00AFB9",
    bluedark: "#01292C",
    bluemiddark: "#01292C",
    bluemidlight: "#7ADCE1",
    bluelight: "#E0FBFD",
    purpleprimary: "#989AF2",
    purpledark: "#01011D",
    purplemiddark: "#3D3FBE",
    purplemidlight: "#B6B6EC",
    purplelight: "#EFEEFF",
    orangeprimary: "#FD8C2E",
    orangedark: "#1C0C00",
    orangemiddark: "#CF650D",
    orangemidlight: "#FFA55B",
    orangelight: "#FFEDDE",
    yellow: "#F3DA1A",
    yellowdark: "#171500",
    yellowmiddark: "#958602",
    yellowmidlight: "#F4E77E",
    yellowlight: "#FDFBEC",
    brown: "#D7B79E",
    browndark: "#120800",
    brownmiddark: "#85664D",
    brownmidlight: "#F4D8C4",
    brownlight: "#FFF7F0",
    magenta: "#F35B80",
    magentadark: "#27000A",
    magentamiddark: "#B8294B",
    magentamidlight: "#FF96AF",
    magentalight: "#FFEFF3",
    bordercolor: "#BEBEBF",
    footercolor: "#F3F3F2",
    caption: "#6E847C",
    bodycolor: "#4C4C4C",
  },
};

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    initAnalytics();
    setAnalyticUser();
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);
  return (
    <>
      <Script
        id="afterInteractive"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <GlobalStyle />
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <ThemeProvider theme={theme}>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </ThemeProvider>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}
