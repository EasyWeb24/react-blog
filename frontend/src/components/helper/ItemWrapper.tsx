interface Props {
  className?: string;
  flexDirection?: string;
  alignItems?: string;
  display?: string;
  maxWidth?: string;
  margin?: string;
  children?: React.ReactNode;
}

const ItemWrapper: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default ItemWrapper;
