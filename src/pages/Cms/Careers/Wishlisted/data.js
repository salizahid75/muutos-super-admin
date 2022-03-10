import { Image } from '../DataTable/styles'

import { ImageTitle, LikesWrapper } from './styles'

import { ReactComponent as HeartIcon } from "assets/icons/Heart.svg"
import { Button } from 'ant'


export const columns = [
    {
        title: '',
        key: 'image',
        render: (record) => <ImageTitle><Image src={record.images && record.images[0]} /><p>{record.name}</p></ImageTitle>,
    },
    {
        title: '',
        dataIndex: 'likes',
        key: 'likes',
        render: likes => <LikesWrapper><HeartIcon /> <span>{likes}</span></LikesWrapper>
    },
    {
        title: '',
        dataIndex: 'discount',
        key: 'discount',
        render: productId => {
            return <Button style={{ maxWidth: "165px", marginLeft: "auto" }} type="secondary">Make Discount</Button>
        }
    },
]
