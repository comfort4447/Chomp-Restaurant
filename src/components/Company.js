import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar, faBars } from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react';
import Menu from './Menu';
import { CompanyData } from '../Helpers/CompanyData';
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

const Order = () => {
    const [showLinks, setShowLinks] = useState(false)
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
                    <h1>Our company focuses on <span>food and people.</span></h1>
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
        </>
    );
}


export default Order;