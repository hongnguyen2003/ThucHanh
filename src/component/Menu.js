import Item from "./Item";
import PropTypes from "prop-types";
export default function Menu({ list }) {
    return <ul>
        {
            list.map((item, index) => <Item key={index} link={item.url} content={item.text} />)
        }
    </ul>

}

Menu.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        text: PropTypes.string
    }))
}