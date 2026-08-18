import MenuList from "./menu-list";
import { useState } from "react";

export default function MenuItem({ item }) {
    const [displayCurrentChildren, setdisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentLabel) {
        setdisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        }
        )
    }

    return (
        <li>
            <div style={{ display: 'flex', gap: "20px" }}>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ?
                        <span onClick={() => handleToggleChildren(item.label)} style={{cursor:"pointer"}}>+</span>
                        : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 &&  displayCurrentChildren[item.label]?
                    <MenuList list={item.children} />
                    : null
            }
        </li>
    );
}