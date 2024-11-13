import { ExternalLink as ExternalLinkIcon } from "lucide-react"; // Rename import to avoid confusion

interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  linkClass?: string;
  divClass?: string;
}

const ExternalLinkWithIcon = ({
  children,
  divClass = "",
  linkClass = "",
  ...props
}: ExternalLinkProps) => {
  return (
    <div className={`items-center gap-1 ${divClass}`}>
      <a {...props} className={`${linkClass}`} target="_blank">
        {children}
      </a>
      <ExternalLinkIcon size={16} />
    </div>
  );
};

export default ExternalLinkWithIcon;
