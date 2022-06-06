import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack, Typography } from '@mui/material';

type Anchor = 'Login' | 'left' | 'bottom' | 'right' | 'top';

const Login = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  return (
    <div>
      {['Login'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer('right', true)}>{anchor}</Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            <Typography sx={{ textAlign: 'center', fontSize: 20, padding: '15px 0 0' }}>LOGIN</Typography>
            <Stack spacing={2} sx={{ padding: '10px', minWidth: 300 }}>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField id="outlined-basic" label="Password" variant="outlined" />

              <Button variant="contained">Login</Button>
            </Stack>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Login

