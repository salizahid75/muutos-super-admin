import {Image} from '../DataTable/styles'

import {ImageTitle, LikesWrapper} from './styles'

import { ReactComponent as HeartIcon } from "assets/icons/Heart.svg"
import { Button } from 'ant'


export const columns = [
  {
    title: 'Name',
    dataIndex: 'likes',
    key: 'likes',
  },      
  {
    title: 'Category',
    dataIndex: 'likes',
    key: 'likes',
  },
  {
          title: 'Likes',
          dataIndex: 'likes',
          key: 'likes',
          render: likes => <LikesWrapper><HeartIcon /> <span>{likes}</span></LikesWrapper>
        },
        {
          title: 'Actions',
          dataIndex: 'discount',
          key: 'discount',
          render: productId => {
              return <Button style={{maxWidth: "165px", marginLeft: "auto"}} type="secondary">Make Discount</Button>
          }
        },
]
;