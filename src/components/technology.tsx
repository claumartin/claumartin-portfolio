interface TechnologyProps extends React.PropsWithChildren {
  name: string
}

export const Technology: React.FC<TechnologyProps> = ({name, children}) => {
  return (
    <div className="col-span-1 flex gap-2 items-center">
      <div className="text-2xl p-2 rounded size-fit">
        {children}
      </div>
      <p className="md:whitespace-nowrap"># {name}</p>
    </div> 
  );
}