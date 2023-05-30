import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LineUpPage from './components/LineUpPage';
import BandPage from './components/BandPage';
import InfoPage from './components/InfoPage';
import ArchivePage from './components/ArchivePage';
import ContactPage from './components/ContactPage';
import { CssBaseline, Container, Box } from '@mui/material';
import GoogleAnalytics from './GoogleAnalytics'
import TicketRedirect from './components/TicketRedirect';
import CookieConsent from "react-cookie-consent";
import Cookies from 'universal-cookie';

const App: React.FC = () => {

  const cookies = new Cookies();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <GoogleAnalytics>
            <Header />
            <Box component="main" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Box flexGrow={1} paddingTop="64px">
                <Container maxWidth="lg">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/line-up" element={<LineUpPage />} />
                    <Route path="/line-up/:bandName" element={<BandPage />} />
                    <Route path="/info" element={<InfoPage />} />
                    <Route path="/archive" element={<ArchivePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/tickets" element={<TicketRedirect />} />
                  </Routes>
                </Container>
              </Box>
              <Footer />
            </Box>
            <CookieConsent
              location="bottom"
              buttonText="Accept"
              declineButtonText="Decline"
              cookieName="cookie-acceptance"
              style={{ background: "#2B373B" }}
              buttonStyle={{ color: "#ffffff", fontSize: "13px", borderRadius: '5px', background: "green" }}
              declineButtonStyle={{ color: "#ffffff", fontSize: "13px", borderRadius: '5px', background: "red" }}
              expires={150}
              enableDeclineButton
              onDecline={() => {
                const cookieNames = cookies.getAll(); // get all cookies
                for (let key in cookieNames) {
                  cookies.remove(key); //remove each cookie
                }
              }}
            >
              We use cookies to enhance your experience. By clicking "Accept", you agree to our use of cookies. By clicking "Decline", you decline our use of non-essential cookies.
            </CookieConsent>
          </GoogleAnalytics>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
export { };