import React, {FC} from "react";
import Link from "next/link";
import {MenuStyle} from "./style";


const Menu: FC = () => {

    return (
        <MenuStyle>
            <Link href={"/simple/"}><a>Click</a></Link>
        </MenuStyle>

    )
}

export default Menu
