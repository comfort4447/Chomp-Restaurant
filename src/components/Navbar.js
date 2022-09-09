import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar, faBars } from '@fortawesome/fontawesome-free-solid'
import { WorkCard } from '../Helpers/work';
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
    const getCartTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
    const [showLinks, setShowLinks] = useState(false)

    const { addItem } = useCart();

    const getTotalItems = () => {

    }
    const handleAddToCart = () => {
        
    }
    const handleRemoveToCart = () => {
        
    }
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
            {/* HERO SECTION */}
             <section id='Hero'>
                     <div className='hero_text'>
                     <div data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="900">
                         <h1>Beautiful food & takeaway, <span>delivered</span> to your door.</h1>
                         </div>
                         <div data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1500">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                             . Lorem Ipsum has been the industry's standard dummy text ever 
                             since the 1500.</p>
                             </div>
                             <div data-aos="fade-right"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="2000">
                                <a href='/order'><button className='hero_btn'>Place an Order</button></a>
                            </div>
                         <div data-aos="fade-right"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="2000">
                        <div className='hero_rating'>
                            <h2 className='rating'><FontAwesomeIcon icon={faStar}/></h2>
                            <h2> Trustpilot</h2>
                         </div>
                         <p className='reviews'><span > 4.8 out of 5 </span> based on 2000+ reviews</p>
                     </div>
                     </div>
                    <div className='hero_img'>
                    <div data-aos="fade-down"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="1000">
                        <img src='./images/heroImage.png' className='heroImg'/>
                        </div>
                     </div>
            </section>
            {/* PRODUCT SECTION */}
            <section id='product'>
                    <div className='product_text'>
                         <h1>The home of fresh products</h1>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                             industry. Lorem Ipsum has been the industry's standard dummy 
                             text ever since the 1500.</p>
                         <a href='/company'><button className='hero_btn'>Learn about us</button></a>
                     </div>
                     <div className='hero_img'>
                    <img src='./images/freshProductImg.png' className='productImg'/>
                    </div>
            </section>
             {/* HOW IT WORKS SECTION */}
          <section id='work'>
                <div className='work_section'>
                    <h1 className='work_sectionH1'>How it works</h1>
                   <div className='card_work'>
                          {WorkCard.map(postr => {
                                return (
                                    <div className='card2'>
                                        <div className='card'>
                                            <img className='img_work' src={`../images/${postr.img}`} />
                                            <h1>{postr.title}</h1>
                                            <p>{postr.details}</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </section>

            <section id='order1'>
                {/* <div className='order_text1'>
                    <h1>Get your food <span>delivered</span>, or <span>pick-up</span> in store.</h1>
                </div> */}
            </section>

            <section id='menu'>
            
                <div className='menu_container'>
                    <div className='menu_text'>
                        <h1>Browse our menu</h1>
                        <p>Use our menu to place an order online, or <a href='#'>phone</a> our store to
                        place a pickup order. Fast and fresh food.</p>
                    </div>
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
            {/* ORDER ONLINE */}
            <section id='order'>
                 <div className='order_details'>
                         <img className='order_img' src='../images/Order.png'/>
                     <div className='order_text'>
                         <h1>Order online with our simple checkout</h1>
                         <p>Lorem Ipsum is simply dummy text of the printing and 
                             typesetting industry. Lorem Ipsum has been the 
                             industry's standard dummy text ever since the 1500.</p>
                         <a href='/faq'><button className='hero_btn'>See our FAQ</button></a>
                     </div>
                 </div>
             </section>


             {/* CONTACT ONLINE */}
             <section id='order'>
                 <div className='order_details'>
                     <div className='order_text'>
                         <h1>Call our store and takeaway when it suits you best.</h1>
                         <p>Lorem Ipsum is simply dummy text of the printing and 
                             typesetting industry. Lorem Ipsum has been the 
                             industry's standard dummy text ever since the 1500.</p>
                        <button className='hero_btn'>Ph. +234 81 4589 8631</button>
                     </div>
                     <img className='order_img' src='../images/contact.png'/>
                 </div>
             </section>

            
              {/* SUPPORT ONLINE */}
              <section id='support'>
                 <div className='support_details'>
                     <div className='support_img'>
                         <img className='support_img1' src='../images/Order.png'/>
                     </div>
                     <div className='support_details_text'>
                         <h1><span>Support</span> good food and local business.</h1>
                         <a href='/order'><button className='hero_btn2'>Order now</button></a>
                    </div>
                 </div>
            </section>

            <section id='foot'>
                <footer>
                    <div className='foot_det'>
                        <div className='foot1'>
                            <p>Get most out of our <span>restaurant</span></p>
                        </div>
                        <div className='footer_details'>
                            <butto className='hero_btn'>Subscribe</butto>
                        </div>
                    </div>
                    <div className='footer_nav'>
                        <img src='./images/logo.svg' className='logo' />
                        <div className='link'>
                            <Link to="/"><a href=''><h2>Home</h2></a></Link>
                            <Link to= "/order"><a href=''><h2>Order</h2></a></Link>
                            <a href='./company'><h2>Company</h2></a>
                            <a href='/faq'><h2>FAQ</h2></a>
                            <a href=''><h2 onClick={sendEmail}>Contact</h2></a>
                        </div>
                    </div>
                    
                </footer>
            </section>
        </>
    )
}


export default Order