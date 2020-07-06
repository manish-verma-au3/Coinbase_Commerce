import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import Button from 'react-bootstrap/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));
  
  function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const Menu = () => {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (
        <div>
            {/* <Typography variant="h6" className={classes.title}>
            Icon with text
          </Typography> */}
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                     primary= {<Link style={{color:'black'}} to="/home/dashboard">Dashboard</Link>}
                  />
                </ListItem>,
              )}
            </List>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                     primary= {<Link style={{color:'black'}} to="/home/balances">Balances</Link>}
                  />
                </ListItem>,
              )}
            </List>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                     primary= {<Link style={{color:'black'}} to="/home/payments">Payments</Link>}
                  />
                </ListItem>,
              )}
            </List>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                     primary= {<Link style={{color:'black'}} to="/home/checkouts">Checkouts</Link>}
                  />
                </ListItem>,
              )}
            </List>
          </div>
          <div style={{marginTop:'175px'}}>
          <Button  size="lg" className='cardbutton' active>
                  <h6> Accept Payments</h6>
                </Button>
          </div>
        </div>
       
    )
}

export default Menu
