import DesktopLayout from './desktop';
import MobileLayout from './mobile';
import { ILayoutProps } from './layout.types';

const MainLayout = (props: ILayoutProps) => {
  const { mobile, desktop, children } = props;

  return (
    <>
      <MobileLayout {...mobile}>{children}</MobileLayout>
      <DesktopLayout {...desktop}>{children}</DesktopLayout>
    </>
  );
};

export default MainLayout;
