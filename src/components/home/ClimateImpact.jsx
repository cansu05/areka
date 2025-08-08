import { motion } from "framer-motion";

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
  const src =
    "https://ourworldindata.org/explorers/co2?country=~OWID_WRL&hideControls=true&Gas+or+Warming=CO%E2%82%82&Accounting=Territorial&Fuel+or+Land+Use+Change=All+fossil+emissions&Count=Cumulative&Relative+to+world+total=false";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-40">
      <motion.div className="max-w-xl text-center space-y-6" {...fadeUp}>
        <motion.h2 className="text-4xl font-bold text-gray-700" {...fadeUp}>
          The Climate Crisis Is Rapidly Escalating
        </motion.h2>

        <motion.p className="text-gray-700 text-xl" {...fadeUpDelayed}>
          Many people want to take action but don’t know where to start. Carbon
          markets are complex, and existing solutions are often expensive,
          unreliable, or inaccessible.
        </motion.p>

        <motion.p
          className="text-emerald-500 font-semibold text-xl"
          {...fadeRight}
        >
          We now need simple and effective climate action that everyone,
          everywhere can take.
        </motion.p>
      </motion.div>

      <motion.div
        className="aspect-[16/11] w-full overflow-hidden rounded-2xl"
        {...fadeRight}
      >
        <iframe
          title="Cumulative CO₂ emissions — Our World in Data"
          src={src}
          loading="lazy"
          style={{ border: 0, width: "100%", height: "100%" }}
        />
      </motion.div>
    </section>
  );
};

export default ClimateImpact;
