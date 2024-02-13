import { Item } from "../api/types"

export const ItemComponent = (item: Item) => {
    const goto = () => {
        window.open(item.link, '_blank');
    }
    return (
        <div id={item.id.toString()} onClick={goto} style={{ display: "flex", placeItems: "center", cursor: "pointer" }}>
            <img src={item.icon} height={30} style={{ margin: "5px" }}></img>
            <a>{item.title}</a>
        </div>
    )
}