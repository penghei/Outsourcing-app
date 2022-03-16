import React from 'react'
import { Avatar} from 'antd';
import { history } from 'umi';
interface IProps{
    imgUrl:string
}
const AdminAvatar:React.FC<IProps> = ({
    imgUrl
}) => {

    return(
        <div className='avatar-block' onClick={()=>history.push('/main/admin')}>
         <Avatar src={imgUrl}/>   
        </div>
    )
}
export default AdminAvatar