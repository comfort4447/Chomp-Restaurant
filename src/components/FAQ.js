import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar, faBars } from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FAQData from './FAQData';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }


const Order = () => {
    
    const [showLinks, setShowLinks] = useState(false)
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <>
            {/* NAVBAR SECTION */}
            <section id='Nav' className='Navbar'>
                <a href=''><h2><img src='./images/logo.svg' className='logo'></img></h2></a>
                    <ul>
                        <div className='links' id={showLinks ? "hidden" : ""}>
                            <a href='/'><h2>Home</h2></a>
                            <a href='/order'><h2>Order</h2></a>
                            <a href='/company'><h2>Company</h2></a>
                            <a href='/faq'><h2>FAQ</h2></a>
                            <a href=''><h2>Contact</h2></a>
                        </div>
                            <button onClick={() => setShowLinks (!showLinks)}>
                            <FontAwesomeIcon size='2x' icon={faBars}/></button>
                            <div className='Nav_cart'>
                              <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={1} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                    </ul>  
            </section>

            <section id='order1'>
                <div className='order_text1'>
                    <h1>Frequently Asked <span>Questions</span></h1>
                </div>
            </section>

            <section id='menu'>
                <div className='menu_container'>
                    {/* <div className='menu_text'>
                        <h1>Browse our menu</h1>
                        <p>Use our menu to place an order online, or <a href='#'>phone</a> our store to
                        place a pickup order. Fast and fresh food.</p>
                    </div> */}
                    <div className='menu_options'>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs className='tabs' value={value} onChange={handleChange}  aria-label="full width tabs example" variant="fullWidth">
                                    <Tab label="Our Food" {...a11yProps(0)} />
                                    <Tab label="Our Delivery" {...a11yProps(1)} />
                                    <Tab label="Our Company" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <div className='burger_menu1'>
                                    <FAQData />
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                            <div className='burger_menu1'>
                                <FAQData  />
                            </div>
                            </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className='burger_menu1'>
                                <FAQData />
                            </div>
                        </TabPanel>
                        </Box>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Order;