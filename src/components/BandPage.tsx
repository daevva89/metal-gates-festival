import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { Box, Button, Container, Typography, Grid, useMediaQuery, Theme } from "@mui/material";
import YouTube from "react-youtube";
import Hero from "./Hero";

const BandPage: React.FC = () => {
    const { bandName } = useParams<{ bandName: string }>();
    const bands = useSelector((state: RootState) => state.bands.bands);
    const band = bands.find(
        (b) => b.name.toLowerCase().replace(/\s/g, "-") === bandName
    );

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

    if (!band) {
        return <Typography variant="h4">Band not found</Typography>;
    }

    const opts = {
        height: isSmallScreen ? "auto" : "390",
        width: isSmallScreen ? "100%" : "640",
        playerVars: {
            autoplay: 0,
        },
        origin: window.location.origin,
    };

    return (
        <Box sx={{ bgcolor: "background.paper", pb: 6 }}>
            <Hero image={`/images/bands/img-hero/${band.heroImage}`} />
            <Container sx={{ mt: 4 }}>
                <Box sx={{ position: "relative", textAlign: "center" }}>
                    {isSmallScreen && (
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/line-up"
                        >
                            Back to Line-up
                        </Button>
                    )}
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 2,
                            fontSize: isSmallScreen ? "2.5rem" : "3.75rem",
                        }}
                    >
                        {band.name}
                    </Typography>
                    {!isSmallScreen && (
                        <Button
                            variant="outlined"
                            sx={{ position: "absolute", top: 0, left: 0 }}
                            component={Link}
                            to="/line-up"
                        >
                            Back to Line-up
                        </Button>
                    )}
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 2,
                            fontSize: isSmallScreen ? "1.2rem" : "1.5rem",
                        }}
                    >
                        {band.genre}
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 2,
                        fontSize: isSmallScreen ? "0.9rem" : "1rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: band.description }}
                >
                </Typography>
                {band.youtubeId && (
                    <Box sx={{ maxWidth: "80%", mx: "auto", display: "flex", justifyContent: "center" }}>
                        <YouTube videoId={band.youtubeId} opts={opts} />
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default BandPage;
