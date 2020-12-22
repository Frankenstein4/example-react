import React, { useState, useEffect } from 'react';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Anchor } from 'antd';
const { Link } = Anchor;
import style from './style.less'


export default function TreeTable() {

    const [targetOffset, setTargetOffset] = useState(undefined);



    useEffect(() => {
        setTargetOffset(window.innerHeight / 2);
    }, []);

    const handleAnchorClick = (e, link) => {
        e.preventDefault();
    };
    const aa = () => {
        return <div style={{ width: '100%' }}>
            <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596129248963&di=390fb20ec3728be6efcde43835a50d22&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F23%2F20151223175222_5kuj4.jpeg' style={{ width: '20px', height: '20px' }} />
        </div>
    }
    return (

        <div>
            <div style={{ width: '100%', height: '800px' }} className={style.box}>000000000000</div>
            <div style={{ width: '100%', height: '800px' }} id='box1' className={style.box}>11</div>
            <div style={{ width: '100%', height: '800px' }} id='box2' className={style.box}>22</div>
            <div style={{ width: '100%', height: '800px' }} id='box3' className={style.box}>33</div>
            <div style={{ width: '100%', height: '800px' }} id='box4' className={style.box}>44</div>
            <div style={{ width: '100%', height: '800px' }} id='box5' className={style.box}>55</div>

            <div style={{ backgroundColor: '#fff', width: '300px', height: '400px', position: 'fixed', right: 100, top: 200 }}>
                <Anchor style={{ backgroundColor: '#fff', width: '400px', height: '400px' }} targetOffset={targetOffset}
                    /* getCurrentAnchor={()=>'#box2'} */
                    onClick={handleAnchorClick}
                    className={style.ancthor_box}
                >
                    <Link href="#box1" title={aa()} style={{ height: '50px' }} ></Link>
                    <Link href="#box2" title="Static demo" />
                    <Link href="#box3" title="API">
                        <Link href="#box4" title="Anchor Props" />
                        <Link href="#box5" title="Link Props" />
                    </Link>
                </Anchor>
            </div>
        </div>
    );
}