import { Image } from "./styles"
import axios from 'axios'
import styled from 'styled-components'
import { ReactComponent as TrashIcon } from "assets/icons/Trash/Trash 1.svg"

export var productsData = [];
var pdata;
async function getFeaturedProducts() {
    const products = await axios.post(`http://localhost:8080/api/getFeaturedProducts`, { vendorId: localStorage.getItem('uid') });
    if (products) {
        pdata = products.data.data;
        pdata.forEach((element) => {
            var obj = {}
            obj.name = element.name;
            obj.price = element.price;
            obj.key = element.id;
            obj.image = element.images[0] ? element.images[0] : 'https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg';
            productsData.push(obj);
        });
    }
}
getFeaturedProducts();

export const productsColumns = [
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
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: price => "QAR " + price
    },
    {
        title: "Action",
        dataIndex: "key",
        key: "key",
        render: productId => {
            return (
                <>
                    <ViewIconWrapper>
                        <TrashIcon
                            style={{ cursor: "pointer" }}
                            onClick={()=>{
                                async function deleteFromFeaturedProducts(){
                                    const res = await axios.post('http://localhost:8080/api/removeFromFeaturedProducts', {id: productId});
                                    if(res){
                                        window.location.reload();
                                    }
                                }
                                deleteFromFeaturedProducts();
                            }}
                        />
                    </ViewIconWrapper>
                </>
            )
        },
    }
]

// export const productsData = [
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "1",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "2",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "3",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "4",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "5",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "5",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
// ]
export const servicesColumns = [
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
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Action",
        dataIndex: "key",
        key: "key",
        render: serviceId => {
            return (
                <>
                    <ViewIconWrapper>
                        <TrashIcon
                            style={{ cursor: "pointer" }}
                            onClick={()=>{
                                async function deleteFromFeaturedServices(){
                                    const res = await axios.post('http://localhost:8080/api/removeFromFeaturedServices', {id: serviceId});
                                    if(res){
                                        window.location.reload();
                                    }
                                }
                                deleteFromFeaturedServices();
                            }}
                        />
                    </ViewIconWrapper>
                </>
            )
        },
    }
]


export var servicesData = [];
var pdata;
async function getFeaturedServices() {
    const products = await axios.post(`http://localhost:8080/api/getFeaturedServices`, { vendorId: localStorage.getItem('uid') });
    if (products) {
        pdata = products.data.data;
        pdata.forEach((element) => {
            var obj = {}
            obj.name = element.name;
            obj.price = element.price;
            obj.key = element.id;
            obj.image = element.images[0] ? element.images[0] : 'https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg';
            servicesData.push(obj);
        });
    }
}
getFeaturedServices();


// export const servicesData = [
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "1",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "2",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "3",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "4",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "5",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
//     {
//         image: "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
//         key: "5",
//         name: "An Awesome Name",
//         price: "QAR 120",
//     },
// ]


const ViewIconWrapper = styled.span`
  & > svg {
    & > path {
      fill:#D4D4D8;
    }
  }
`