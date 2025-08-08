import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const fadeUpDelayed = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 },
  viewport: { once: true },
};

const MotionCard = motion(Card);

const ForEveryone = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        variant="h3"
        fontWeight={700}
        color="text.primary"
        textAlign="center"
        mb={6}
      >
        Sustainable Solutions for All
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <MotionCard
            sx={{
              maxWidth: 500,
              minHeight: 400,
              textAlign: "center",
            }}
            {...fadeUp}
          >
            <CardContent sx={{ p: 5 }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Individuals
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontSize: "1.125rem" }}
              >
                Take climate action without changing your daily routine. Areka
                automatically tracks your carbon footprint through the platforms
                you already use, helps you reduce it over time, and offsets the
                rest reliably.
              </Typography>
              <Box mt={3} display="flex" justifyContent="center">
                <CardMedia
                  component="img"
                  image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=360,h=360,fit=crop,trim=93.18518518518518;93.18518518518518;93.18518518518518;93.18518518518518/YrDqZD1WBqu9O9a0/carbonfootprint-A1aPlMvv0vhRPB0e.png"
                  alt="Carbon footprint icon"
                  sx={{ width: 96, height: 96, objectFit: "cover" }}
                />
              </Box>
            </CardContent>
          </MotionCard>
        </Grid>

        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <MotionCard
            sx={{
              maxWidth: 500,
              minHeight: 400,
              textAlign: "center",
            }}
            {...fadeUpDelayed}
          >
            <CardContent sx={{ p: 5 }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Businesses
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontSize: "1.125rem" }}
              >
                In sectors like finance, energy, retail, or logistics, Areka
                integrates verified climate actions into your operations. It
                helps you meet compliance requirements and lead the way in
                sustainability.
              </Typography>
              <Box mt={3} display="flex" gap={2} justifyContent="center">
                <CardMedia
                  component="img"
                  image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=271,fit=crop/YrDqZD1WBqu9O9a0/ghgprotocol-m2W8PZ2er0Syz5Dk.png"
                  alt="GHG Protocol"
                  sx={{ height: 48, width: "auto", objectFit: "contain" }}
                />
                <CardMedia
                  component="img"
                  image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=951,fit=crop/YrDqZD1WBqu9O9a0/iso14064-m6LZMB3OvBt1BWve.jpg"
                  alt="ISO 14064"
                  sx={{ height: 48, width: "auto", objectFit: "contain" }}
                />
              </Box>
            </CardContent>
          </MotionCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForEveryone;
