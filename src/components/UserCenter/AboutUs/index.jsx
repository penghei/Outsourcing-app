import React, { useEffect } from 'react';
import './index.scss'
import imgUrl from '@/assest/sanxiangBank.png' //将资源引入为url
import "@/bootstrap/css/bootstrap.min.css"

const AboutUs = () => {
    return (
        <div className='aboutUs'>
                <dt ><img src={imgUrl} alt="" title="" className='center-block' id="bank-img"/></dt>
                <dd >
                    <p className="text">
                        湖南三湘银行股份有限公司是中部地区首家开业的民营银行，由三一集团联合汉森制药等9家湖南省内知名民营企业共同发起设立，于2016年12月26日正式开业，注册资本金30亿元，注册地湖南长沙。三湘银行以“让银行成为一种随时可得的服务”为使命，紧紧围绕目标产业生态圈和消费金融，着力打造Best银行，即：产业银行(Business Bank)、便捷银行(Easy Bank)、数字银行(Smart Bank)、财富管理银行(Treasury Bank)，成为目标客户的首选银行、优质体验银行和最信赖银行。
                    </p>
                    <a href="https://www.csxbank.com/" className="btn btn-danger center-block">了解更多</a>
                 </dd>
        </div>
    );
}
export default AboutUs;
