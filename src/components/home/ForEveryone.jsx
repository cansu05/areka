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

const ForEveryone = () => {
  return (
    <section className="flex flex-col items-center gap-14 mt-40">
      <div>
        <h1 className="text-5xl text-center font-bold text-gray-700">
          Sustainable Solutions for All
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <motion.div className="space-y-5 text-center max-w-xl" {...fadeUp}>
          <h2 className="text-4xl font-bold text-gray-700">Individuals</h2>
          <p className=" text-gray-700 text-xl">
            Take climate action without changing your daily routine. Areka
            automatically tracks your carbon footprint through the platforms you
            already use, helps you reduce it over time, and offsets the rest
            reliably.
          </p>
          <div className="flex justify-center">
            <img
              alt="Carbon footprint icon"
              loading="lazy"
              className="h-24 w-24 object-cover"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=360,h=360,fit=crop,trim=93.18518518518518;93.18518518518518;93.18518518518518;93.18518518518518/YrDqZD1WBqu9O9a0/carbonfootprint-A1aPlMvv0vhRPB0e.png"
              srcSet="
                https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=360,h=360,fit=crop,trim=93.18518518518518;93.18518518518518;93.18518518518518;93.18518518518518/YrDqZD1WBqu9O9a0/carbonfootprint-A1aPlMvv0vhRPB0e.png 360w,
                https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=720,h=720,fit=crop,trim=93.18518518518518;93.18518518518518;93.18518518518518;93.18518518518518/YrDqZD1WBqu9O9a0/carbonfootprint-A1aPlMvv0vhRPB0e.png 720w,
                https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1080,fit=crop,trim=93.18518518518518;93.18518518518518;93.18518518518518;93.18518518518518/YrDqZD1WBqu9O9a0/carbonfootprint-A1aPlMvv0vhRPB0e.png 1080w
              "
              sizes="(min-width: 920px) 101px, 100vw"
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-5 text-center max-w-xl"
          {...fadeUpDelayed}
        >
          <h2 className="text-4xl font-bold text-gray-700">Businesses</h2>
          <p className=" text-gray-700 text-xl">
            In sectors like finance, energy, retail, or logistics, Areka
            integrates verified climate actions into your operations. It helps
            you meet compliance requirements and lead the way in sustainability.
          </p>
          <div className="flex gap-6 items-center justify-center">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=271,fit=crop/YrDqZD1WBqu9O9a0/ghgprotocol-m2W8PZ2er0Syz5Dk.png"
              alt="GHG Protocol"
              className="h-12 object-contain"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=951,fit=crop/YrDqZD1WBqu9O9a0/iso14064-m6LZMB3OvBt1BWve.jpg"
              alt="ISO 14064"
              className="h-12 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForEveryone;
