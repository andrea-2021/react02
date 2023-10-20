
const Tags = (props) => {
    const { text, backgroundColor } = props;
    return (
        <button className={`badge bg-${backgroundColor}`}>{text}</button>
    )
}

export default Tags;