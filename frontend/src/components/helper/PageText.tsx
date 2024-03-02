interface Props {
  className?: string;
  fontSize?: string;
  color?: string;
  children?: React.ReactNode;
}

const PageText: React.FC<Props> = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};

export default PageText;
