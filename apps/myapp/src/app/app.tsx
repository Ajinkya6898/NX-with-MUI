// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Footer } from '@login/footer';
import { Navbar } from '@login/navbar';
import Theme from 'libs/mui-custom-theme/src/lib/mui-custom-theme';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const InputField = styled(
  TextField,
  {}
)({
  width: 220,
  '& .MuiInputBase-root': {
    height: 30,
  },
});

interface IUser {
  name: string;
}

export function App() {
  const [state, setState] = useState({ name: '' });

  useEffect(() => {
    axios.get('./assets/State.json').then((res) => setState(res.data));
  }, []);
  
  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Box width="100%" textAlign="center">
        <Typography
          variant="h5"
          mt={2}
          fontSize="27.3px"
          fontWeight={500}
          lineHeight="68.25px"
        >
          {state.name} Reg & Title
        </Typography>
      </Box>
      <Box
        margin="auto"
        mt={2}
        border="1px solid #c5d6d0"
        width="500px"
        height="320px"
        sx={{ backgroundColor: '#eeeeee', color: '#333333' }}
      >
        <Typography
          sx={{ mt: 2, ml: 5 }}
          fontSize="21.7px"
          fontWeight={500}
          lineHeight="45.57px"
        >
          Login
        </Typography>
        <Box width="70%" margin="auto" mt={3} height="200px" textAlign="center">
          <Box py={1} display="flex" justifyContent="space-between">
            <Box textAlign="right" width="100px" mt={1}>
              <Typography fontSize="14px" lineHeight="20px">
                User ID
              </Typography>
            </Box>
            <InputField sx={{ backgroundColor: 'white' }} />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box textAlign="right" width="100px" mt={1}>
              <Typography fontSize="14px" lineHeight="20px">
                Password
              </Typography>
            </Box>
            <InputField sx={{ backgroundColor: 'white' }} />
          </Box>
          <Box mt={5}>
            <Button
              sx={{ fontSize: '14px', lineHeight: '20px' }}
              size="small"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
            <Button
              sx={{ fontSize: '14px', lineHeight: '20px', ml: 3 }}
              size="small"
            >
              Forgot Password?
            </Button>
          </Box>
        </Box>
        <Box width="80%" margin="auto" mt={-3}>
          <Typography
            variant="subtitle2"
            fontSize="12px"
            lineHeight="17.14px"
            textAlign="center"
            color="#333333"
          >
            WARNING: Unautorized access or misuse of any data may result in
            disciplinary action, civil penalties, and/or criminal prosecution
          </Typography>
        </Box>
      </Box>
      <Box textAlign="center" mt={3}>
        <Typography variant="subtitle2" fontSize="12px">
          v 3.22.4.4.1
        </Typography>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
