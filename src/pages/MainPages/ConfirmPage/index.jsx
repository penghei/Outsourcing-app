import React from 'react';
// import { useRecoilValue } from 'recoil';
// import { SeckillingGoodsInfo } from '@/store/atoms.js'
import ConfirmGoodsTable from 'components/Confirm/ConfirmGoodsTabel';
import './index.scss'
import ConfirmGoodsDetail from 'components/Confirm/ConfirmGoodsDetail';

/**抢购成功购买确认页面 */
const ConfirmPage = () => {
    // const goodsInfo = useRecoilValue(SeckillingGoodsInfo)
    return (
        <div className='confirm-block'>
            <ConfirmGoodsTable />
            <ConfirmGoodsDetail />
        </div>
    );
}

export default ConfirmPage;
