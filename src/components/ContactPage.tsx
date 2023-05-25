import React from 'react';
import { Box, Container, Grid, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Hero from './Hero';
import { sendEmailAsync } from '../features/contactSlice';
import { RootState, AppDispatch } from '../store/store';
import { useState } from 'react';
import { Alert } from '@mui/material';

const ContactPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sending = useSelector((state: RootState) => state.contact.sending);

  // New state for handling alert
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error' | undefined>();

  // Add states for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceID = 'service_qfz7ok8';
    const templateID = 'template_dr5dw3u';
    const userID = 'TFk1b6yY4B5re88uT';

    const from_name = `${firstName} ${lastName}`; // Concatenate first name and last name

    try {
      await dispatch(
        sendEmailAsync(serviceID, templateID, {
          from_name,
          reply_to: email,
          subject,
          message,
        }, userID),
      );
      setAlertSeverity('success');
    } catch (error) {
      setAlertSeverity('error');
    } finally {
      setAlertOpen(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Metal Gates Festival</title>
        <meta name="description" content="Get in touch with us!" />
      </Helmet>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with us"
        image="/images/hero/hero-contact.jpg"
      />
      <Container maxWidth="lg">
        <Alert
          severity={alertSeverity}
          onClose={handleCloseAlert}
          sx={{ display: alertOpen ? 'flex' : 'none', mb: 2 }}
        >
          {alertSeverity === 'success'
            ? 'Email sent successfully!'
            : 'An error occurred while sending the email.'}
        </Alert>
        <Box sx={{ marginTop: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default ContactPage;
export { };