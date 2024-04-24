import './itemlistcontainer.scss'

const ItemListContainer = ({greetings}) => {
    return (
        <div className="item-list-container">
            <h1>
                { greetings }
            </h1>
        </div>
    )
}

export default ItemListContainer