import { Item } from "../api/types"

export const ItemComponent = (item: Item) => {
    const goto = () => {
        window.open(item.link, '_blank');
    }
    return (
        <div id={item.id.toString()} onClick={goto} style={{ display: "flex", width: "fit-content", placeItems: "center", cursor: "pointer", marginLeft: "20px" }}>
            <img src={item.icon} height={30} style={{ margin: "5px" }}></img>
            <a style={{ fontSize: "1em" }}>{item.title}</a>
        </div>
    )
}