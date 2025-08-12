import { mergeClasses } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={mergeClasses(
        'bg-background rounded-xl shadow-md transition-colors duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
