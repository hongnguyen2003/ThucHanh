import PropTypes from "prop-types";

export default function Item({link, content}) {
    return <li>
        <a href={link}>{content}</a>
    </li>
}

Item.propTypes = {
    link: PropTypes.string,
    content: PropTypes.string
}