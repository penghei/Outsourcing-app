import React from 'react';
import ConfirmGoodsPurchase from '../../../components/Confirm/ConfirmGoodsPurchase';
import ComfirmGoodsDetail from '../../../components/Confirm/ComfirmGoodsDetail';
import './index.scss'

/**抢购成功购买确认页面 */
const ConfirmPage = () => {
    return (
        <div className='confirm-block'>
            {/* <ComfirmGoodsDetail gooodsInfo={goodsInfo} /> */}
            <ConfirmGoodsPurchase />
        </div>
    );
}

export default ConfirmPage;
