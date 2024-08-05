import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import MKBox from 'components/MKBox'; // Adjust imports as necessary
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import DefaultFooter from 'examples/Footers/DefaultFooter';
import AnimatedText from './AnimatedText'; // Import the AnimatedText component
import bgImage from 'assets/images/background.jpg';
import routes from 'routes';
import footerRoutes from 'footer.routes';

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://www.creative-tim.com/product/material-kit-react',
          label: 'free download',
          color: 'info',
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'grid',
          placeItems: 'center',
        }}
      >
     <Container>
  <Grid container justifyContent="center" alignItems="center">
    <AnimatedText 
      text="Guru Jewellers" 
      sx={{ textTransform: 'uppercase' }} 
      
    />
  </Grid>
</Container>
      </MKBox>
      <Card
  sx={{
    p: 6,
    mx: { xs: 9, lg: 3 },
    mt: 15,
    mb: 18,
    backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 1),
    backdropFilter: 'saturate(200%) blur(70px)',
    boxShadow: ({ boxShadows: { xxl } }) => xxl,
  }}
>
  {/* Additional content here */}
</Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
