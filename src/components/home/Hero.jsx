const Hero = () => {
  return (
    <section className="relative w-full py-15 ">
      <video
        src="https://videos.pexels.com/video-files/8318375/8318375-uhd_2560_1440_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.pexels.com/videos/8318375/pexels-photo-8318375.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center text-white max-w-4xl mx-auto gap-8">
        <h1 className="text-3xl md:text-5xl font-bold ">
          Sustainability Is No Longer a Luxury, It’s a Way of Life
        </h1>
        <p className="text-2xl">
          The climate crisis calls on all of us to take action. Protecting our
          future is possible not only through bold moves but also through the
          choices we make every day.
        </p>
        <p className="text-2xl">
          Areka helps you measure, reduce and offset your carbon footprint
          automatically and transparently, guiding you toward a greener future.
          Every step you take shapes the world of tomorrow.
        </p>
        <button className="bg-emerald-500 hover:bg-emerald-700 p-3 text-lg rounded">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
