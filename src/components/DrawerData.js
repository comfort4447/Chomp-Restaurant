import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { colors, Drawer } from '@mui/material';
import { color } from '@mui/system';

const DrawerData = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
            
                <Drawer 
                    anchor='right'
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    >
                        <Box p={2} width='300px' textAlign='center' role='presentation' >
                            <Typography variant='h6' component='div' >
                                Slide Panel
                            </Typography>
                        </Box>
                </Drawer>
        </>
    )
}


export default DrawerData;