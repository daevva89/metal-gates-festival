import React from 'react';
import { Box, Typography, Container, Divider, Button, Link, useMediaQuery, Theme } from '@mui/material';
import Hero from './Hero';

const InfoPage: React.FC = () => {
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    return (
        <>
            <Hero title="Information" subtitle="Find out more about the event" />
            <Container maxWidth="lg">
                <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        About Metal Gates Festival
                    </Typography>
                    <Typography variant="body1">
                        Get ready for the 5th edition of Metal Gates Festival, organized by Final Step Productions. The festival will take place at Quantic Club (Șoseaua Grozăvești 82, București 060752) in Bucharest, Romania. Here's what you need to know before you go:
                    </Typography>
                </Box>
                <Divider sx={{ my: 4 }} />
                <Box>
                    <Typography variant="h4" gutterBottom>
                        Festival Information
                    </Typography>
                    <Typography variant="body1" color="error">
                        <strong>Important:</strong> Only buy tickets from the authorized seller iabilet.ro. Anyone presenting a fake or already scanned ticket will not be allowed entry under any circumstances.
                        <br /><br />
                    </Typography>
                    <Typography variant="body1">
                        Metal Gates Festival features an incredible lineup of metal bands, including headliners Katatonia and Rotting Christ, with more to be announced soon. Stay tuned for the final lineup and schedule!
                        <br /><br />
                        Children under the age of 14 can attend the festival for free if accompanied by a ticket-holding adult. Children between the ages of 14 and 16 require a valid ticket and must be accompanied by a ticket-holding adult. Children over the age of 16 can attend the festival with a valid ticket without an adult.
                        <br /><br />
                        Currently, only festival passes are available. Day tickets will be announced if the festival is not sold out near the date.
                        <br /><br />
                        Ticket prices are as follows:
                    </Typography>
                    <ul>
                        <li>420 RON (~85 EUR) - until May 1st</li>
                        <li>480 RON (~98 EUR) - until July 1st</li>
                        <li>540 RON (~110 EUR) - until September 27th</li>
                    </ul>
                    <Typography variant="body1">
                        <Link href="https://metalgates.iabilet.ro" target="_blank" rel="noopener noreferrer" className="externalLink">
                            <Button color="secondary" variant="contained">Get Tickets</Button>
                        </Link>
                        <br /><br />
                        Join us for an unforgettable weekend of metal music, great food, and amazing people! Don't forget to check out the variety of merchandise available for purchase from our vendors.
                    </Typography>
                </Box>
                <Divider sx={{ my: 4 }} />
                <Box>
                    <Typography variant="h4" gutterBottom>
                        Getting There and Accommodation
                    </Typography>
                    <Typography variant="body1">
                        If you're coming to Metal Gates Festival from out of town, you can find a variety of accommodation options near the venue. Here's how to get to Quantic Club:
                        <br /><br />
                        By public transportation: take the subway to the Grozăvești station, then walk about 10 minutes to the venue.
                        <br /><br />
                        By car: use the Google Maps link below for directions.
                        <br /><br />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11395.051479425558!2d26.059491!3d44.4380262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201dd302158f1%3A0x49bc027df27ca3db!2sQuantic%20Pub!5e0!3m2!1sen!2sro!4v1680718303432!5m2!1sen!2sro"
                            width={isSmallScreen ? '100%' : '600'}
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Typography>
                </Box>
                <Divider sx={{ my: 4 }} />
                <Box>
                    <Typography variant="h4" gutterBottom>
                        After-Party
                    </Typography>
                    <Typography variant="body1">
                        We welcome you to join us at Encore Club (Str. Nicolae Tonitza 13, București 030167) before and after each day of the festival for an amazing after-party! Here's the Google Maps link to the venue: <a href="https://goo.gl/maps/66aikKQdFGUpcSKE9" target="_blank" rel="noopener noreferrer">https://goo.gl/maps/66aikKQdFGUpcSKE9</a>
                        <br /><br />
                        Encore Club is the metal club of the organizers of the festival and it's very welcoming until the morning.
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default InfoPage;
export { };