import React from 'react';
import ConfirmGoodsTable from 'components/Confirm/ConfirmGoodsTabel';
import './index.scss'
import ConfirmGoodsDetail from 'components/Confirm/ConfirmGoodsDetail';
import ConfirmGoodsRemarks from 'components/Confirm/ComfirmGoodsRemarks';

/**抢购成功购买确认页面 */
const ConfirmPage = () => {
    return (
        <div className='confirm-block'>
            <aside className='table-remarks'>
                <ConfirmGoodsTable/>
                <ConfirmGoodsRemarks />
            </aside>
            <div className='v-divider'></div>
            <ConfirmGoodsDetail/>
        </div>
    );
}

export default ConfirmPage;
