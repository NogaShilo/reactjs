import PropTypes from "prop-types"

export const Header = ({ tittle }) => {
    return (
        <header>
            <h1>{tittle}</h1>
        </header>
    )
}

Header.defaultProps = {
    tittle: "Task Tracker",
}

Header.propTypes = {
    tittle: PropTypes.string.isRequired,
}

export default Header