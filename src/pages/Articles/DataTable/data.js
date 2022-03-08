import { Image, EnableDisable } from "./styles"

import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as DeleteIcon } from "assets/icons/Trash/Trash_2.svg"
import { ColorSvg } from "ant"

export const columns = [
    {
        title: "Image",
        dataIndex: "image",
        key: "image",
        render: path => <Image src={path} />,
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },

    {
        title: "Date",
        dataIndex: "date",
        key: "date",
    },

    {
        title: "Reviews",
        dataIndex: "reviews",
        key: "reviews",
    },

    {
        title: "Likes",
        dataIndex: "likes",
        key: "likes",
    },

    {
        title: "Edit Status",
        dataIndex: "edit",
        key: "edit",
        render: staffId => {
            return (
                <div>
                    <span style={{ marginRight: "10px" }}>
                        <EditIcon />
                    </span>
                    <span>
                        <ColorSvg color='gray300' style={{ display: "inline" }}>
                            <DeleteIcon />
                        </ColorSvg>
                    </span>
                </div>
            )
        },
    },
]

export const data = [
    {
        key: "1",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        date: "19 AUG 2021",
        reviews: 28,
        likes: 120,
        edit: 1,
    },
    {
        key: "2",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        date: "19 AUG 2021",
        reviews: 28,
        likes: 120,
        edit: 1,
    },
    {
        key: "3",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        date: "19 AUG 2021",
        reviews: 28,
        likes: 120,
        edit: 1,
    },
    {
        key: "4",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        date: "19 AUG 2021",
        reviews: 28,
        likes: 120,
        edit: 1,
    },
    {
        key: "5",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        date: "19 AUG 2021",
        reviews: 28,
        likes: 120,
        edit: 1,
    },
    {
        key: "6",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        date: "19 AUG 2021",
        reviews: 28,
        likes: 120,
        edit: 1,
    },
    {
        key: "7",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        date: "19 AUG 2021",
        reviews: 28,
        likes: 120,
        edit: 1,
    },
    {
        key: "8",
        image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
        name: "An Awesome Name",
        date: "19 AUG 2021",
        reviews: 28,
        likes: 120,
        edit: 1,
    },
]
