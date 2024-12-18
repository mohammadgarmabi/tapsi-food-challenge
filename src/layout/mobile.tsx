import ScrollArea from '@/components/atoms/scroll-area';
import { AppBar, Paper, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { IMobileLayoutProps } from './layout.types';

const MobileLayout = (props: IMobileLayoutProps) => {
  const { children, actionBar, bottomBar, sxChildren, sxActionBar, sxBottomBar } = props;

  return (
    <Box
      sx={{
        display: {
          xs: 'block',
          sm: 'block',
          md: 'none',
        },
      }}
    >
      <Stack>
        {actionBar && (
          <AppBar
            position="sticky"
            elevation={0}
            sx={{
              top: 0,
              bgcolor: 'background.paper',
              color: 'text.primary',
              minHeight: 60,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: (theme) => theme.spacing(0, 2),
              ...sxActionBar,
            }}
          >
            {actionBar}
          </AppBar>
        )}
        <Box
          sx={{
            padding: (theme) => theme.spacing(3, 2, 30, 2),
            bgcolor: 'background.default',
            ...sxChildren,
          }}
        >
          <ScrollArea>{children}</ScrollArea>
        </Box>
        {bottomBar && (
          <Paper
            sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: 'background.paper',
              color: 'text.primary',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 2,
              ...sxBottomBar,
            }}
            elevation={5}
          >
            {bottomBar}
          </Paper>
        )}
      </Stack>
    </Box>
  );
};

export default MobileLayout;
