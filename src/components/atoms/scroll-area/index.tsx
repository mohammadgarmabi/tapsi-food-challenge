import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const ScrollArea = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <SimpleBarReact
      className={`nicescroll-bar ${className}`}
      style={{
        width: '100%',
      }}
    >
      {children}
    </SimpleBarReact>
  );
};

export default ScrollArea;
