import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'

const Header = ({title}) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as = {Link} to="/">{title}</Navbar.Brand>
            <Nav.Link as = {Link} to="/login">Log in</Nav.Link>
            <Nav.Link as = {Link} to="/signin">Sign up</Nav.Link>
        </Navbar>
    )
}

Header.defaultProps = {
    title: 'App',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header