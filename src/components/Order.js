import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import { BurgerData } from '../Helpers/BurgerData';
import { Drinks } from '../Helpers/Drinks';
import { Sides } from '../Helpers/Sides';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer } from '@mui/material';
import { useCart } from 'react-use-cart';
import { useStateValue } from './StateProvider';
import Product from './Product'



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
const Order = ({id, title, price, details, img}) => {

    
    const [showLinks, setShowLinks] = useState(false)


    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const [{basket}, dispatch] = useStateValue()


    const sendEmail = () => {
        window.open("mailto:support@example.com?subject=SendMail&body=Description");
      };


    return (
        <>
            <Drawer 
             anchor='right'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            >
            <Box p={2} width='500px' textAlign='left' role='presentation' >
                <Typography variant='h6' component='div' >
                    Your Order
                    <hr></hr>
                    {basket.length === 0 ? (
                        <div className='empty_cart'>
                            <p>We couldn't find any items in your cart.</p>
                            <a href='/order'><button className='hero_btn'>Start Order Now</button></a>
                        </div>
                    ) : (
                        <div>
                            {basket.map(item => (
                                <Product 
                                    id={item.id}
                                    img={item.img}
                                    price={item.price}
                                    title={item.title}
                                    details={item.details}
                                />
                            ))
                            }
                        </div>
                        
                    )}
                    
                </Typography>
                
            </Box>
        </Drawer>
            {/* NAVBAR SECTION */}
            <section id='Nav' className='Navbar'>
                <a href=''><h2><img src='./images/logo.svg' className='logo'></img></h2></a>
                    <ul>
                        <div className='links' id={showLinks ? "hidden" : ""}>
                            <Link to="/"><a href=''><h2>Home</h2></a></Link>
                            <Link to= "/order"><a href=''><h2>Order</h2></a></Link>
                            <a href='./company'><h2>Company</h2></a>
                            <a href='/faq'><h2>FAQ</h2></a>
                            <a href=''><h2 onClick={sendEmail}>Contact</h2></a>
                        </div>
                            <button onClick={() => setShowLinks (!showLinks)}>
                            <FontAwesomeIcon size='2x' icon={faBars}/></button>
                            <div className='Nav_cart'>
                            <IconButton aria-label="cart" onClick={() => setIsDrawerOpen(true)}>
                                    <StyledBadge badgeContent={
                                        basket.length} 
                                        color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                    </ul>  
            </section>

            <section id='order1'>
                <div className='order_text1'>
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <h1>Get your food <span>delivered</span>, or <span>pick-up</span> in store.</h1>
                    </div>
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
                                    <Tab label="Burger" {...a11yProps(0)} />
                                    <Tab label="Sides" {...a11yProps(1)} />
                                    <Tab label="Drinks" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <div className='burger_menu'>
                                    {BurgerData.map((burgerData,index)  => {
                                        const addToCart = () => {
                                            dispatch({
                                            type: 'ADD_TO_CART',
                                            item: {
                                                id: id,
                                                title: burgerData.title,
                                                price: burgerData.price,
                                                details: burgerData.details,
                                                img: burgerData.img,
                                            }
                                        })
                                        }
                                        return (
                                            <div className='burger_menu_details'>
                                                
                                                <div className='image'>
                                                    <img className='menu_img' src={`../images/${burgerData.img}`} />
                                                </div>
                                                <div className='burger_details'>
                                                    <div className='details'>
                                                        <h2>{burgerData.title}</h2>
                                                        <h2 className='price'>${`${burgerData.price} USD `}</h2>
                                                    </div>
                                                        <p>{burgerData.details}</p>
                                                    <div className='burger_btn'>
                                                        <input className='hero_btn3' type="number" id="quantity" name="quantity" min="1" max="100" />
                                                        <button onClick={addToCart}  className='hero_btn1' >Add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                            <div className='burger_menu'>
                                {Sides.map(sideData => {
                                    const addToCart = () => {
                                        dispatch({
                                        type: 'ADD_TO_CART',
                                        item: {
                                            id: id,
                                            title: sideData.title,
                                            price: sideData.price,
                                            details: sideData.details,
                                            img: sideData.img,
                                        }
                                    })
                                    }
                                    return (
                                            <div className='burger_menu_details'>
                                                <div className='image'>
                                                    <img className='menu_img' src={`../images/${sideData.img}`} />
                                                </div>
                                            <div className='burger_details'>
                                                <div className='details'>
                                                    <h2>{sideData.title}</h2>
                                                    <h2 className='price'>${`${sideData.price} USD `}</h2>
                                                </div>
                                                    <p>{sideData.details}</p>
                                                <div className='burger_btn'>
                                                    <input className='hero_btn3' type="number" id="quantity" name="quantity" min="1" max="100" step="1"  />
                                                    <button onClick={addToCart} className='hero_btn1'>Add to cart</button>
                                                </div>
                                            </div>
                                            </div>
                                    )
                                })}
                            </div>
                            </TabPanel>
                        <TabPanel value={value} index={2}>
                        <div className='burger_menu'>
                            {Drinks.map(drinkData => {
                                const addToCart = () => {
                                    dispatch({
                                    type: 'ADD_TO_CART',
                                    item: {
                                        id: id,
                                        title: drinkData.title,
                                        price: drinkData.price,
                                        details: drinkData.details,
                                        img: drinkData.img,
                                    }
                                })
                                }
                                return (
                                        <div className='burger_menu_details'>
                                            <div className='image'>
                                                <img className='menu_img' src={`../images/${drinkData.img}`} />
                                            </div>
                                        <div className='burger_details'>
                                            <div className='details'>
                                                <h2>{drinkData.title}</h2>
                                                <h2 className='price'>${`${drinkData.price} USD `}</h2>
                                            </div>
                                            <p>{drinkData.details}</p>
                                            <div className='burger_btn'>
                                                <input className='hero_btn3' type="number" id="quantity" name="quantity" min="1" max="100" step="1" />
                                                <button onClick={addToCart} className='hero_btn1'>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                        </TabPanel>
                        </Box>
                    </div>
                </div>
            </section>
            <section>
                <footer>
                    <div className='footer_details'>
                        <img src='./images/logo.svg' className='logo' />
                        <p>Takeaway & Delivery template
                        for small - medium businesses.</p>
                    </div>
                    <div className='grid-container'>
                    <div className='location'>
                        <h1>Comapny</h1>
                        <a href='/'><p>Home</p></a>
                        <a href='/order'><p>Order</p></a>
                        <a href='/faq'><p>FAQ</p></a>
                        <a href=''><p>Contact</p></a>
                        <a href='/company'><p>Company</p></a>
                    </div>
                    <div className='quick'>
                            <h1>Template</h1>
                        <div className='quick1'>
                            <p><a href='#'>Style Guide</a></p>
                            <p><a href='#'>Changelog</a></p>
                            <p><a href='#'>Licence</a></p>
                            <p><a href='#'>Webflow University</a></p>
                        </div>
                    </div>
                    <div className='quick'>
                            <h1>Flowbase</h1>
                        <div className='quick1'>
                            <p><a href='#'>More Cloneables</a></p>
                        </div>
                    </div>
                    </div>
                </footer>
            </section>
        </>
    );
}


export default Order;