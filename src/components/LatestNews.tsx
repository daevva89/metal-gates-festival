import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { Box, Typography, Card, CardContent, Grid, useMediaQuery, Theme } from "@mui/material";

const LatestNews: React.FC = () => {
    const news = useSelector((state: RootState) => state.news.items);
    const sortedNews = [...news].sort((a, b) => b.id - a.id);
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.between("sm", "md"));

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {sortedNews.map((item) => (
                <Card key={item.id}>
                    <CardContent>
                        <Grid container spacing={2} alignItems="center" marginBottom="20px">
                            <Grid item xs={8} sm={10}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontSize: isSmallScreen ? "1.1rem" : isMediumScreen ? "1.3rem" : "1.5rem",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sm={2} style={{ textAlign: "right" }}>
                                <Typography variant="subtitle2">
                                    {item.date}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3}>
                                <img
                                    src={`/images/news/${item.image}`}
                                    alt={item.title}
                                    style={{ width: "100%" }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: isSmallScreen ? "0.9rem" : "1rem",
                                    }}
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default LatestNews;
