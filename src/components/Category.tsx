import { Category } from "../api/types"
import { ItemComponent } from "./Item"

export const CategoryComponent = (category: Category) => {
    return (
        <div id={category.id.toString()}>
            <div style={{ display: "flex", placeItems: "center" }}>
                <img src={category.icon} height={30} style={{ margin: "5px" }}></img>
                <h2>{category.name}</h2>
            </div>

            <p>{category.description}</p>
            <div style={{ display: "flex" }} >
                {
                    category.items.map((item) => {
                        return (
                            <ItemComponent
                                {...item} />
                        )
                    })
                }
            </div>
        </div>)
}