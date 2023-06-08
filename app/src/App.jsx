import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import Nav from "./components/Nav"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import HeroSectionTwo from "./components/HeroSectionTwo"
import TestimonialsSection from "./components/TestimonialsSection"
import CtaSection from "./components/CtaSection"
import Footer from "./components/Footer"

const theme = {
  colors: {
    introEmailBackground: 'hsl(217, 28%, 15%)',
    mainBackground: 'hsl(218, 28%, 13%)',
    footerBackground: 'hsl(216, 53%, 9%)',
    testimonialsBackground: 'hsl(219, 30%, 18%)',

    ctaGradient: 'linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%))',
    error: 'hsl(0, 100%, 63%)',

    white: 'hsl(0, 0%, 100%)'
  },

  desktop: '1440px'
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav />
      <HeroSection />
      <FeaturesSection />
      <HeroSectionTwo />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </ThemeProvider>
  )
}

export default App
