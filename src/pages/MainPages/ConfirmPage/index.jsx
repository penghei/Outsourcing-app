import React from 'react';
import ConfirmGoodsTable from 'components/Confirm/ConfirmGoodsTabel';
import './index.scss'
import ConfirmGoodsPurchase from 'components/Confirm/ConfirmGoodsPurchase';
import ConfirmGoodsRemarks from 'components/Confirm/ComfirmGoodsRemarks';
import GoodsPurchase from '../../../components/Goods/GoodsPurchase'
import { SeckillingGoodsInfo, GoodsPageLoading, AllGoodsList } from 'store/atoms';
import { useRecoilValue } from 'recoil';
import { Card } from 'antd';
import ComfirmGoods from '../../../components/Confirm/ComfirmGoods';


/**抢购成功购买确认页面 */
const ConfirmPage = () => {
    const goodsInfo = useRecoilValue(SeckillingGoodsInfo);

    return (
        <div className='confirm-block'>
            <ComfirmGoods gooodsInfo={goodsInfo} />
            <aside className='table-remarks'>
                {/* <ConfirmGoodsTable goodsInfo={goodsInfo} /> */}
                {/* <ConfirmGoodsRemarks /> */}
            </aside>
            <div className='v-divider'></div>
            <ConfirmGoodsPurchase />
        </div>
    );
}

export default ConfirmPage;
