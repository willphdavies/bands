import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material';
import { ReactNode, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './CedarvilleCursive-Regular.ttf';
import './Default.scss';
import { DefaultSideMenu } from './Default.side-menu';
import { Link } from 'react-router-dom';
import { useAppState } from '../data';
interface DefaultTemplateProps {
  children: ReactNode;
}

export function DefaultTemplate(props: DefaultTemplateProps) {
  const { children } = props;
  const [drawOpen, setDrawOpen] = useState(false);
  const { logo } = useAppState();
  return (
    <Box className="default-template">
      <Box className="default-template__background"></Box>
      <AppBar
        className="default-template__header"
        position="fixed"
        color="transparent"
        elevation={0}
      >
        <Toolbar>
          <Link className="home-link" to="/">
            <Box className="default-template__logo">
              <img src={logo} alt="Logo" />
            </Box>
            <Box>
              <Typography
                className="default-template__title cursive -white"
                variant="h4"
              >
                All In One Take
              </Typography>
              <Typography className="default-template__subtitle -white">
                leave your comfort zone at the door
              </Typography>
            </Box>
          </Link>
          <Box className="-spacer"></Box>
          <IconButton onClick={() => setDrawOpen(!drawOpen)}>
            <MenuIcon className="header__menu-icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DefaultSideMenu isOpen={drawOpen} setIsOpen={setDrawOpen} />
      <Box className="default-template__content">{children}</Box>
    </Box>
  );
}
