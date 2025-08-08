import { Box, TextField, Typography, Button, Paper } from "@mui/material";

const ContactPage = () => {
  return (
    <section className="pt-10 pb-40">
      <Typography variant="h3" fontWeight="bold" textAlign="center" mb={6}>
        Contact Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 35%" }, p: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            AREKA Yazılım ve Enerji Teknolojileri A.Ş.
          </Typography>
          <Typography>
            Bilkent Cyberpark, CyberGO Incubation Center, Bilkent Station
            Bilkent, Ankara - TURKEY
          </Typography>

          <Typography mt={2}>Email: info@areka.ai</Typography>
          <Typography>Phone: +90 312 000 00 00</Typography>
        </Box>

        <Paper
          sx={{
            flex: { xs: "1 1 100%", md: "0 0 55%" },
            p: 4,
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Send us a message
          </Typography>
          <Box component="form" display="flex" flexDirection="column" gap={2}>
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#10B981",
                "&:hover": { bgcolor: "#047857" },
                p: 1.5,
                fontSize: "1.125rem",
                borderRadius: 2,
              }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
      </Box>
    </section>
  );
};

export default ContactPage;
