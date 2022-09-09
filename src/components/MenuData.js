// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function ColumnsGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2} columns={16}>
//         <Grid item xs={8}>
//           <Item><TabPanel value={value} index={0}>
//                                 <div className='burger_menu'>
//                                     {BurgerData.map(burgerData => {
//                                         return (
//                                             <div className='burger_menu_details'>
//                                                     <img className='menu_img' src={`../images/${burgerData.img}`} />
//                                                 <div className='burger_details'>
//                                                     <h2>${`${burgerData.price} USD `}</h2>
//                                                     <h2>{burgerData.title}</h2>
//                                                     <p>{burgerData.details}</p>
//                                                     <div className='burger_btn'>
//                                                         <input type="number" id="quantity" name="quantity" min="0" max="100" step="1"  />
//                                                         <button>Add to cart</button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}
//                                 </div>
//                             </TabPanel></Item>
//         </Grid>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
