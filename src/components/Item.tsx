import styled from "styled-components";
import { Item } from "../api/types"
import { Edit } from "lucide-react";

const ItemContainer = styled.div`
    display: flex;
    width: fit-content;
    place-items: center;
    align-items: center;
    cursor: pointer;
    margin-left: 10px;
`;

const ItemHeader = ItemContainer;

const ItemIcon = styled.img`
    height: 30;
    margin: 5px;
`;

const ItemTitle = styled.h2`
    font-size: 1em;
    margin-right: 10px;
`;

interface ItemComponentProps {
    style?: React.CSSProperties;
    item: Item;
}

export const ItemComponent = ({style,item}: ItemComponentProps) => {
    const goto = () => {
        window.open(item.link, '_blank');
    };

    return (
        <ItemContainer style={{ ...style, marginTop: "5px" }} id={item.id.toString()} >
            <ItemHeader onClick={goto}><ItemIcon src={item.icon}></ItemIcon>
                <ItemTitle>{item.title}</ItemTitle></ItemHeader>
            <Edit />
        </ItemContainer>
    );
}