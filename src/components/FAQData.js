import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='accordion'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1') }>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            {/* aria-label="full width tabs example" variant="fullWidth" */}
          <Typography sx={{ width: 'auto', flexShrink: 0, color: '#35b8be' }}>
          Do you offer any vegan options?
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius 
          enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, 
          eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean 
          faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae 
          risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, 
          mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero 
          vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
          Nunc ut sem vitae risus tristique posuere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: 'auto', flexShrink: 0, color: '#35b8be' }}>Do you offer any gluten free options?s
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius 
          enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, 
          eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean 
          faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae 
          risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, 
          mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero 
          vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
          Nunc ut sem vitae risus tristique posuere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: 'auto', flexShrink: 0, color: '#35b8be' }}>
          Can I clone these sections?
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius 
          enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, 
          eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean 
          faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae 
          risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, 
          mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero 
          vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
          Nunc ut sem vitae risus tristique posuere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: 'auto', flexShrink: 0, color: '#35b8be' }}>
            Why is Webflow so amazing?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius 
          enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, 
          eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean 
          faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae 
          risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, 
          mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero 
          vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
          Nunc ut sem vitae risus tristique posuere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: 'auto', flexShrink: 0, color: '#35b8be' }}>
          Do we need to write a business plan?
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius 
          enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, 
          eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean 
          faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae 
          risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, 
          mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero 
          vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
          Nunc ut sem vitae risus tristique posuere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          aria-label="full width tabs example" 
          variant="fullWidth"
        >
          <Typography sx={{ width: 'auto', flexShrink: 0, color: '#35b8be' }}>
          How can we get funding for our start up?
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius 
          enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, 
          eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean 
          faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae 
          risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, 
          mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero 
          vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
          Nunc ut sem vitae risus tristique posuere.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
