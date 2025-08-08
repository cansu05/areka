import { NavLink } from "react-router";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  Link,
  TextField,
  Button,
} from "@mui/material";

const menuItems = [
  "About Us",
  "Terms of Service",
  "Privacy Policy",
  "Distance Sales Agreement",
  "KVKK",
];

const Footer = () => {
  return (
    <footer className="bg-emerald-500 text-white px-10 py-8">
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography fontWeight="bold">
            AREKA Software and Energy Technologies Inc.
          </Typography>
          <Typography>
            Bilkent Cyberpark, CyberGO Incubation Center, Bilkent Station
            Bilkent, Ankara - TURKEY
          </Typography>
          <Typography mt={2}>info@areka.ai</Typography>

          <Typography mt={4} fontWeight="bold">
            Follow us
          </Typography>
          <Box display="flex" gap={2} mt={2} fontSize="1.5rem">
            <IconButton color="inherit">
              <FaLinkedin />
            </IconButton>
            <IconButton color="inherit">
              <FaXTwitter />
            </IconButton>
            <IconButton color="inherit">
              <FaInstagram />
            </IconButton>
          </Box>

          <Typography mt={4}>
            Pay with İyzico, Mastercard, VISA, American Express, Troy
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" gap={1}>
            {menuItems.map((item) => (
              <Link
                key={item}
                component={NavLink}
                to="/"
                underline="hover"
                color="inherit"
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography fontWeight="bold">
            Stay updated on sustainability and emission trends.
          </Typography>
          <Box mt={3} display="flex">
            <TextField
              type="email"
              placeholder="Your email address"
              size="small"
              fullWidth
              variant="outlined"
              sx={{
                bgcolor: "white",
                input: { color: "black" },
              }}
            />
            <Button
              sx={{
                bgcolor: "grey.900",
                color: "white",
                px: 3,
                "&:hover": { bgcolor: "grey.800" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box mt={8} textAlign="center">
        <Typography variant="body2">© 2025. All rights reserved.</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
