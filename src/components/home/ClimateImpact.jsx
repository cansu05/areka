import { motion } from "framer-motion";
import { Container, Box, Typography } from "@mui/material";

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

const fadeRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay: 0.3 },
  viewport: { once: true },
};

const ClimateImpact = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Box display="grid" justifyItems="center">
        <Box
          component={motion.div}
          {...fadeUp}
          textAlign="center"
          sx={{ maxWidth: 900 }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            color="text.primary"
            gutterBottom
          >
            The Climate Crisis Is Rapidly Escalating
          </Typography>

          <Box component={motion.div} {...fadeUpDelayed}>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontSize: "1.25rem" }}
            >
              Many people want to take action but don’t know where to start.
              Carbon markets are complex, and existing solutions are often
              expensive, unreliable, or inaccessible.
            </Typography>
          </Box>

          <Box component={motion.div} {...fadeRight} sx={{ mt: 1.5 }}>
            <Typography
              variant="h6"
              color="success.main"
              fontWeight={600}
              sx={{ fontSize: "1.25rem" }}
            >
              We now need simple and effective climate action that everyone,
              everywhere can take.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ClimateImpact;
