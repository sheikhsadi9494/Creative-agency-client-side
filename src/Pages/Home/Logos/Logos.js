import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Logos = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', marginX: '50px', marginY: '80px'}}>
            <Box sx={{textAlign: "center"}}>
                <img style={{width: "55%"}} src="https://i.ibb.co/2yCrRRV/slack.png" alt="" />
            </Box>
            <Box sx={{textAlign: "center"}}>
                <img style={{width: "55%"}} src="https://i.ibb.co/3sSQXDT/google.png" alt="" />
            </Box>
            <Box sx={{textAlign: "center"}}>
                <img style={{width: "55%"}} src="https://i.ibb.co/pzjkjTK/uber.png" alt="" />
            </Box>
            <Box sx={{textAlign: "center"}}>
                <img style={{width: "55%"}} src="https://i.ibb.co/frvHJ8Y/netflix.png" alt="" />
            </Box>
            <Box sx={{textAlign: "center"}}>
                <img style={{width: "55%"}} src="https://i.ibb.co/DM6V8wM/airbnb.png" alt="" />
            </Box>
        </Box>
    );
};

export default Logos;