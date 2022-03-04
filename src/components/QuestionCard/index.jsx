import React, { useEffect } from 'react';
import "@/bootstrap/css/bootstrap.min.css"
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import './index.scss'

const { Panel } = Collapse;


const QuestionCard = () => {
    const text = `
    如您的K宝密码锁定或忘记，请卡主本人持本人有效身份证件原件和注
    册个人网上银行的银行卡到全国任意农业银行网点申请补办证书。 
    `;
    return (
        <div className='question_card'>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
            >
                <Panel header="个人网银k宝密码锁定或忘记怎么办 " key="1" className="site-collapse-custom-panel ">
                    <p >{text}</p>
                </Panel>
            </Collapse>
        </div>
    );
}

export default QuestionCard;