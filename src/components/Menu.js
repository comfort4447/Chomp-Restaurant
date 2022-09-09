// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { BurgerData } from '../Helpers/BurgerData';
// import { Drinks } from '../Helpers/Drinks';
// import { Sides } from '../Helpers/Sides';
// import { Drawer } from '@mui/material';
// import { useCart } from 'react-use-cart';
// import { useStateValue } from './StateProvider'

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }


// export default function Menu({id, title, price, details, img}) {
//     const { addItem } = useCart();

//     const getTotalItems = () => {

//     }
//     const handleAddToCart = () => {
        
//     }
//     const handleRemoveToCart = () => {
        
//     }
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     const [{basket}, dispatch] = useStateValue()

//     const [isDrawerOpen, setIsDrawerOpen] = useState(false)

   

//   return (
//     <section id='menu'>
//                 <div className='menu_container'>
//                     {/* <div className='menu_text'>
//                         <h1>Browse our menu</h1>
//                         <p>Use our menu to place an order online, or <a href='#'>phone</a> our store to
//                         place a pickup order. Fast and fresh food.</p>
//                     </div> */}
//                     <div className='menu_options'>
//                         <Box sx={{ width: '100%' }}>
//                             {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                                 <Tabs className='tabs' value={value} onChange={handleChange}  aria-label="full width tabs example" variant="fullWidth">
//                                     <Tab label="Burger" {...a11yProps(0)} />
//                                     <Tab label="Sides" {...a11yProps(1)} />
//                                     <Tab label="Drinks" {...a11yProps(2)} />
//                                 </Tabs>
//                             </Box> */}
//                             <TabPanel value={value} index={0}>
//                                 <div className='burger_menu'>
//                                     {BurgerData.map(burgerData => {
//                                         return (
//                                             <div className='burger_menu_details'>
//                                                 <div className='image'>
//                                                     <img className='menu_img' src={`../images/${burgerData.img}`} />
//                                                 </div>
//                                                 <div className='burger_details'>
//                                                     <div className='details'>
//                                                         <h2>{burgerData.title}</h2>
//                                                         <h2 className='price'>${`${burgerData.price} USD `}</h2>
//                                                     </div>
//                                                         <p>{burgerData.details}</p>
//                                                     <div className='burger_btn'>
//                                                         <input className='hero_btn3' type="number" id="quantity" name="quantity" min="1" max="100" />
//                                                         <button onClick={removeItem} className='hero_btn1' >Add to cart</button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}
//                                 </div>
//                             </TabPanel>
//                             <TabPanel value={value} index={1}>
//                             <div className='burger_menu'>
//                                 {Sides.map(sideData => {
//                                     return (
//                                             <div className='burger_menu_details'>
//                                                 <div className='image'>
//                                                     <img className='menu_img' src={`../images/${sideData.img}`} />
//                                                 </div>
//                                             <div className='burger_details'>
//                                                 <div className='details'>
//                                                     <h2>{sideData.title}</h2>
//                                                     <h2 className='price'>${`${sideData.price} USD `}</h2>
//                                                 </div>
//                                                     <p>{sideData.details}</p>
//                                                 <div className='burger_btn'>
//                                                     <input className='hero_btn3' type="number" id="quantity" name="quantity" min="1" max="100" step="1"  />
//                                                     <button onClick={removeItem} className='hero_btn1'>Add to cart</button>
//                                                 </div>
//                                             </div>
//                                             </div>
//                                     )
//                                 })}
//                             </div>
//                             </TabPanel>
//                         <TabPanel value={value} index={2}>
//                         <div className='burger_menu'>
//                             {Drinks.map(drinkData => {
//                                 return (
//                                         <div className='burger_menu_details'>
//                                             <div className='image'>
//                                                 <img className='menu_img' src={`../images/${drinkData.img}`} />
//                                             </div>
//                                         <div className='burger_details'>
//                                             <div className='details'>
//                                                 <h2>{drinkData.title}</h2>
//                                                 <h2 className='price'>${`${drinkData.price} USD `}</h2>
//                                             </div>
//                                             <p>{drinkData.details}</p>
//                                             <div className='burger_btn'>
//                                                 <input className='hero_btn3' type="number" id="quantity" name="quantity" min="1" max="100" step="1" />
//                                                 <button onClick={removeItem} className='hero_btn1'>Add to cart</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                     </div>
//                         </TabPanel>
//                         </Box>
//                     </div>
//                 </div>
//             </section>
//   );
// }
