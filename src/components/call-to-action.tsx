export const CallToAction: React.FC = () => {
  return (
    <div className="bg-dark-purple w-full flex flex-col justify-center items-center p-8">
      <img 
        alt="claudia profile photo" 
        src={`${import.meta.env.BASE_URL}/images/claumartin.png`}
        className="mask-radial-at-center mask-radial-from-50% mask-radial-to-70% size-full sm:size-80 lg:size-96 object-cover"
      />
    </div>
  );
}