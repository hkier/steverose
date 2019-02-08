import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import Icons from '../Icons';

const styles = {
    bigScreenNav: {
        '@media screen and (max-width: 601px)': {
            display: 'none',
        },
        display: 'block',
    },
    desktopMenuButtonActive: {
        border: '2px solid black',
    },
    desktopMenuButtonInactive: {
        border: '0px',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        border: '2px solid black',
        marginLeft: -12,
        marginRight: 20,
    },
    menuItem: {
        textDecoration: 'none',
    },
    navBar: {
        background: 'linear-gradient(to bottom, #990041, #fff 95%)',
        borderBottom: '0px',
        boxShadow: '0 0 0',
    },
    root: {
        flexGrow: 1,
    },
    smallScreenNav: {
        '@media screen and (max-width: 600px)': {
            display: 'block',
        },
        display: 'none',
        textDecoration: 'none',
    },
}

// const NavBar = () => {
//     return (
//         <div>
//             <AppBar position="static" className="Menu-bar">
//                 <Toolbar >
//                     <Typography variant="title" color="inherit">
//                         <Link className="Nav-link" to="/bio">Bio</Link>
//                         <Link className="Nav-link" to="/issues">Issues</Link>
//                         <Link className="Nav-link" to="/experience">Board Experience</Link>
//                         <Link className="Nav-link" to="/interest">Interests</Link>
//                         <Link className="Nav-link" to="/endorsements">Endorsements</Link>
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     )
// }

// export default NavBar;

class ButtonAppBar extends React.Component {
    state = {
        anchorEl: null,
        page: '',
    }

    componentDidMount() {
        const { currentPage } = this.props
        this.setState({ page: currentPage })
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    handlePageChange = page => {
        this.setState({ page })
    }

    render() {
        const { anchorEl, page } = this.state
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.navBar}>
                    <Toolbar>
                        <div className={classes.bigScreenNav}>
                            <Button href="/bio"
                                className={page === '/bio' ? classes.desktopMenuButtonActive : classes.desktopMenuButtonInactive}>
                                Bio
							</Button>
                            <Button href="/issues"
                                className={page === '/issues' ? classes.desktopMenuButtonActive : classes.desktopMenuButtonInactive}>
                                Issues
							</Button>
                            <Button href="/experience"
                                className={page === '/experience' ? classes.desktopMenuButtonActive : classes.desktopMenuButtonInactive}>
                                Board Experience
                            </Button>
                            <Button href="/interest"
                                className={page === '/interest' ? classes.desktopMenuButtonActive : classes.desktopMenuButtonInactive}>
                                Interests
                            </Button>
                            <Button href="/endorsements"
                                className={page === '/endorsements' ? classes.desktopMenuButtonActive : classes.desktopMenuButtonInactive}>
                                Endorsements
							</Button>
                        </div>
                        <div className={classes.smallScreenNav}>
                            <IconButton
                                style={styles.menuButton}
                                aria-owns={anchorEl ? 'simple-menu' : null}
                                aria-haspopup="true"
                                onClick={this.handleClick}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                                <MenuItem onClick={this.handleClose}>
                                    <a href="/bio" className={classes.menuItem}>Bio</a>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <a href="/issues" className={classes.menuItem}>Issues</a>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <a href="/experience" className={classes.menuItem}>Board Experience</a>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <a href="/interest" className={classes.menuItem}>Interests</a>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <a href="/endorsements" className={classes.menuItem}>Endorsements</a>
                                </MenuItem>
                            </Menu>
                        </div>
                        <Icons />
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    currentPage: PropTypes.string.isRequired,
}

export default withStyles(styles)(ButtonAppBar)

