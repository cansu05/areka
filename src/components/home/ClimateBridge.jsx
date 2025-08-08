import { motion } from "framer-motion";
import { Typography, CardMedia, Box } from "@mui/material";

const fadeLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const fadeRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const ClimateBridge = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mt-40">
      <motion.div
        className="aspect-[16/11] w-full overflow-hidden rounded-2xl"
        {...fadeLeft}
      >
        <Box>
          <CardMedia
            component="img"
            height="200"
            image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=541,h=393,fit=crop/YrDqZD1WBqu9O9a0/untitled-design-2-YrDWQ7j7kRCL90Lp.png"
            alt="Sustainability illustration"
            className="w-full h-auto"
          />
        </Box>
      </motion.div>

      <motion.div className="max-w-xl text-center " {...fadeRight}>
        <Typography variant="h4" fontWeight="bold" color="text.primary" mb={2}>
          Areka turns climate intentions into real impact
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          fontSize="1.25rem"
          mb={1}
        >
          We make it effortless to cut and offset carbon emissions by
          integrating climate action directly into the platforms people already
          use — automatically, seamlessly, and transparently.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          fontSize="1.25rem"
          mb={2}
        >
          From paying a bill to filling your tank or shopping online, climate
          action becomes part of the moment — verifiable, impactful, and built
          for everyday life.
        </Typography>

        <Typography variant="body1" color="success.main" fontWeight="bold">
          With Areka, sustainability isn’t an extra step — it’s part of the
          journey.
        </Typography>
      </motion.div>
    </section>
  );
};

export default ClimateBridge;
