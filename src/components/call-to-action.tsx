export const CallToAction: React.FC = () => {
  return (
    <div className="bg-dark-purple w-full flex justify-center items-center gap-12 p-8 sm:flex-row-reverse flex-wrap">
      <img 
        alt="claudia profile photo" 
        src={`${import.meta.env.BASE_URL}/images/claumartin.png`}
        className="mask-radial-at-center mask-radial-from-50% mask-radial-to-70% size-full sm:size-80 lg:size-96 object-cover"
      />
      <div className="text-isabelline">
        <p className="text-2xl">Claudia Martín</p>
        <h1 className="font-title text-6xl">Frontend Developer</h1>
        <p className="italic">Welcome!</p>
        <p className="italic">See my work, let's connect :)</p>
      </div>
    </div>
  );
}