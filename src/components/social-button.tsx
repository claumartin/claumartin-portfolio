interface SocialButtonProps extends React.PropsWithChildren {
  href: string;
  title: string;
  content: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  href, 
  title,
  content,
  children,
} : SocialButtonProps) => {
  return (
    <button 
      type="button"
      className="px-4 py-2 rounded border-isabelline border-2 hover:scale-105 transition-transform bg-banana-yellow/80 cursor-pointer"
    >
      <a
        href={href}
        title={title}
        aria-label={content}
        target="_blank" 
        className="flex gap-2 items-center justify-center"
      >
        {children}
        <span>{content}</span>
      </a>
    </button>
  );
}