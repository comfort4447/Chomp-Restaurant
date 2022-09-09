import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer } from '@mui/material';
import { useStateValue } from './StateProvider';
import Product from './Product'
import { CompanyData } from '../Helpers/CompanyData';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Order = ({id, title, price, details, img}) => {
    const [showLinks, setShowLinks] = useState(false)

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
                        <h1>Our company focuses on <span>food and people.</span></h1>
                    </div>
                </div>
            </section>

            <section id='product'>
                    <div className='product_text'>
                        <h1>The home of fresh products</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy 
                            text ever since the 1500.</p>
                        <button className='hero_btn'>Learn about us</button>
                    </div>
                    <div className='hero_img'>
                    <img src='./images/freshProductImg.png' className='productImg'/>
                    </div>
            </section>


                <section id='work'>
                    <div className='rating_bg'>
                        <div className='work_section'>
                            <div className='card_work'>
                                    {CompanyData.map(data => {
                                        return (
                                            <div className='card2'>
                                                <div className='card'>
                                                    <h1>{data.price}</h1>
                                                    <img className='img_work' src={`../images/${data.img}`} />
                                                    <p>{data.title}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
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