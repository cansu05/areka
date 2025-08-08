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
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=541,h=393,fit=crop/YrDqZD1WBqu9O9a0/untitled-design-2-YrDWQ7j7kRCL90Lp.png"
          alt="Sustainability illustration"
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div className="max-w-xl text-center space-y-6" {...fadeUp}>
        <motion.h2 className="text-4xl font-bold text-gray-700" {...fadeUp}>
          Areka turns climate intentions into real impact
        </motion.h2>

        <motion.p className="text-gray-700 text-xl" {...fadeUpDelayed}>
          We make it effortless to cut and offset carbon emissions by
          integrating climate action directly into the platforms people already
          use — automatically, seamlessly, and transparently.
        </motion.p>

        <motion.p
          className="text-gray-700 text-xl"
          {...fadeUpDelayed}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          From paying a bill to filling your tank or shopping online, climate
          action becomes part of the moment — verifiable, impactful, and built
          for everyday life.
        </motion.p>

        <motion.p
          className="text-emerald-500 font-semibold text-xl"
          {...fadeRight}
        >
          With Areka, sustainability isn’t an extra step — it’s part of the
          journey.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ClimateBridge;
