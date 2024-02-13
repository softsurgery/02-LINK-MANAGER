import { Category } from "../api/types"
import { ItemComponent } from "./Item"

export const CategoryComponent = (category: Category) => {
    return (
        <div id={category.id.toString()}>
            <div style={{ display: "flex", placeItems: "center" }}>
                <img src={category.icon} height={30} style={{ margin: "5px" }}></img>
                <h2 style={{ textDecoration: "underline" }}>{category.name} : </h2>
            </div>


            <div>
                {
                    category.items.map((item, index) => {
                        return (
                            <ItemComponent
                                key={index}
                                {...item} />
                        )
                    })
                }
            </div>
        </div>)
}