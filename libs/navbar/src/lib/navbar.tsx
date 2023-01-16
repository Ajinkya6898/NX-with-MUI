import { Box, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <Box>
      <Box
        sx={{ backgroundColor: '#666666' }}
        paddingLeft="150px"
        color="white"
        height="40px"
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ color: '#bec0c0', paddingTop: '2px', fontSize: '22px' }}
          >
            Dealertrack Registration&Title
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
