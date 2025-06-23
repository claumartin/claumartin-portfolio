interface TechnologyProps extends React.PropsWithChildren {
  name: string
}

export const Technology: React.FC<TechnologyProps> = ({name, children}) => {
  return (
    <div className="col-span-1 flex gap-2 items-center">
      <div className="text-2xl bg-dark-purple p-2 rounded size-fit">
        {children}
      </div>
      <p className="whitespace-nowrap"># {name}</p>
    </div> 
  );
}