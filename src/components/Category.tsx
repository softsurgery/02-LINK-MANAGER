import styled from "styled-components"
import { Category } from "../api/types"
import { ItemComponent } from "./Item"
import { Edit } from "lucide-react";

const CategoryHeader = styled.div`
    display: flex;
    placeItems: center;
    align-items: center;
`;

const CategoryTitle = styled.h2`
    textDecoration: underline;
    margin-right: 10px;
`;

const CategoryIcon = styled.img`
    height: 30;
    margin: 5px;
`;

interface CategoryComponentProps {
    style?: React.CSSProperties;
    category: Category;
}

export const CategoryComponent = ({ style, category }: CategoryComponentProps) => {
    return (
        <div style={{ ...style, marginTop: "20px" }} id={category.id.toString()}>
            <CategoryHeader>
                <CategoryIcon src={category.icon}></CategoryIcon>
                <CategoryTitle>  {category.name} : </CategoryTitle>
                <Edit />
            </CategoryHeader>

            {
                category.items.map((item, index) =>
                    <ItemComponent
                        key={index}
                        item={item} />
                )
            }

        </div>)
}