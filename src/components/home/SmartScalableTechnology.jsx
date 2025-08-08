import { motion } from "framer-motion";
import { Card, Typography } from "@mui/material";

const data = [
  {
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=175,h=117,fit=crop,trim=43.714285714285715;0;30.857142857142858;0/YrDqZD1WBqu9O9a0/aipowered-mxB45LNlKxfr6Ov8.png",
    title: "AI-Powered Emissions Tracking",
    desc: "Our system analyzes your behavior and usage data to provide real-time, accurate carbon footprint insights — no spreadsheets or estimates needed.",
  },
  {
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=122,h=122,fit=crop/YrDqZD1WBqu9O9a0/blockchain_18536682-AE0Pyl67QwiovJKO.png",
    title: "Blockchain-Based Verification",
    desc: "Every offset transaction is securely recorded in a digital ledger, making your impact traceable, transparent, and tamper-proof.",
  },
  {
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=124,h=119,fit=crop/YrDqZD1WBqu9O9a0/smart_14210186-YZ98N1DWWzIGn9kM.png",
    title: "Micro Tokenization",
    desc: "Carbon credits are divided into accessible, verifiable tokens, enabling contributions of any size from anyone, anywhere.",
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imgVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

const titleVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const paragraphVariant = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const SmartScalableTechnology = () => {
  const MotionCard = motion(Card);
  const MotionTypography = motion(Typography);

  return (
    <section className="flex flex-col items-center gap-16 mt-40 mb-40 text-center">
      <MotionTypography
        variant="h3"
        fontWeight={700}
        color="text.primary"
        variants={titleVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        Smart, Flexible, and Reliable Technology
      </MotionTypography>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {data.map((item, i) => (
          <MotionCard
            key={i}
            variants={itemVariant}
            className="space-y-4 will-change-transform p-5"
          >
            <motion.img
              variants={imgVariant}
              src={item.img}
              alt={item.title}
              className="mx-auto h-28 object-contain"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 text-xl">{item.desc}</p>
            </div>
          </MotionCard>
        ))}
      </motion.div>

      <MotionTypography
        variant="h6"
        color="success.main"
        maxWidth="800px"
        mx="auto"
        variants={paragraphVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        sx={{ fontSize: "1.25rem" }}
      >
        Technology shouldn’t just monitor the problem — it should scale the
        solution. That’s exactly what we’ve built.
      </MotionTypography>
    </section>
  );
};

export default SmartScalableTechnology;
