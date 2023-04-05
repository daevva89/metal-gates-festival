import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Band } from '../features/bandsSlice';

interface BandCardProps {
    band: Band;
}

const BandCard: React.FC<BandCardProps> = React.memo(({ band }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/line-up/${band.name.toLowerCase().replace(/ /g, '-')}`);
    };

    return (
        <Card onClick={handleClick}>
            <CardActionArea>
                <Box sx={{ paddingTop: '100%', position: 'relative' }}>
                    <CardMedia
                        component="img"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        src={`/images/bands/img-small/${band.smallImage}`}
                        alt={band.name}
                    />
                </Box>
                <CardContent>
                    <Box display="flex" alignItems="center">
                        {band.flags.map((flag, index) => (
                            <Box key={index} marginRight="10px">
                                <img src={`/images/flags/${flag}`} alt={band.country} width="32" height="20" />
                            </Box>
                        ))}
                        <Typography variant="subtitle1" textTransform="uppercase" noWrap>
                            {band.name}
                        </Typography>
                    </Box>
                    <Typography variant="subtitle2" color="textSecondary">
                        {band.genre}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});

export default BandCard;
