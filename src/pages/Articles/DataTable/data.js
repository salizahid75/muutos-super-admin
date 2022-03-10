import { Image, EnableDisable } from "./styles"

import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as DeleteIcon } from "assets/icons/Trash/Trash_2.svg"
import { ColorSvg } from "ant"
import axios from "axios"

export const columns =  (onEdit) => [
    {
        title: "Image",
        dataIndex: "image",
        key: "image",
        render: path => <Image src={`http://localhost:8080/upload/articleImages/${path}`} />,
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
        title: "Likes",
        dataIndex: "likes",
        key: "likes",
    },

    {
        title: "Edit Status",
        dataIndex: "key",
        key: "key",
        render: articleId => {
            return (
                <div>
                    {/* <span style={{ marginRight: "10px" }}>
                        <EditIcon
                            style={{cursor:'pointer'}} 
                            onClick={() => onEdit(articleId)}
                        />
                    </span> */}
                    <span>
                        <ColorSvg color='gray300' style={{ display: "inline" }}>
                            <DeleteIcon style={{cursor:'pointer'}} 
                            onClick={async ()=>{
                                const articles = await axios.post(`http://localhost:8080/api/deleteArticleById`, { id: articleId });
                                if(articles){
                                    window.location.reload();
                                }
                            }}
                            />
                        </ColorSvg>
                    </span>
                </div>
            )
        },
    },
]
export var data = [];
var pdata;
async function getFeaturedProducts() {
    const articles = await axios.post(`http://localhost:8080/api/allArticles`, { vendorId: localStorage.getItem('uid') });
    if (articles) {
        pdata = articles.data.data;
        pdata.forEach((element) => {
            var obj = {}
            obj.name = element.title;
            obj.likes = element.likes;
            obj.date = element.addedOn;
            obj.key = element.id;
            obj.image = element.images[0] ? element.images[0] : 'https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg';
            data.push(obj);
        });
    }
}
getFeaturedProducts();

// export const data = [
//     {
//         key: "1",
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         name: "An Awesome Name",
//         date: "19 AUG 2021",
//         reviews: 28,
//         likes: 120,
//         edit: 1,
//     },
//     {
//         key: "2",
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         name: "An Awesome Name",
//         date: "19 AUG 2021",
//         reviews: 28,
//         likes: 120,
//         edit: 1,
//     },
//     {
//         key: "3",
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         name: "An Awesome Name",
//         date: "19 AUG 2021",
//         reviews: 28,
//         likes: 120,
//         edit: 1,
//     },
//     {
//         key: "4",
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         name: "An Awesome Name",
//         date: "19 AUG 2021",
//         reviews: 28,
//         likes: 120,
//         edit: 1,
//     },
//     {
//         key: "5",
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         name: "An Awesome Name",
//         date: "19 AUG 2021",
//         reviews: 28,
//         likes: 120,
//         edit: 1,
//     },
//     {
//         key: "6",
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         name: "An Awesome Name",
//         date: "19 AUG 2021",
//         reviews: 28,
//         likes: 120,
//         edit: 1,
//     },
//     {
//         key: "7",
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         name: "An Awesome Name",
//         date: "19 AUG 2021",
//         reviews: 28,
//         likes: 120,
//         edit: 1,
//     },
//     {
//         key: "8",
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         name: "An Awesome Name",
//         date: "19 AUG 2021",
//         reviews: 28,
//         likes: 120,
//         edit: 1,
//     },
// ]
