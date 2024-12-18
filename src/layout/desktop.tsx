import { AppBar, Container, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { IDesktopLayoutProps } from './layout.types';
import ScrollArea from '@/components/atoms/scroll-area';

const DesktopLayout = ({ children, header, sxHeader }: IDesktopLayoutProps) => {
  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block',
        },
      }}
    >
      <Stack>
        {header && (
          <Box sx={{ bgcolor: 'background.paper' }}>
            <Container maxWidth="xl">
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
                  ...sxHeader,
                }}
              >
                {header}
              </AppBar>
            </Container>
          </Box>
        )}
        <Container maxWidth="xl">
          <Box component="main" sx={{ padding: (theme) => theme.spacing(2, 2) }}>
            <ScrollArea>{children}</ScrollArea>
          </Box>
        </Container>
      </Stack>
    </Box>
  );
};

export default DesktopLayout;
