import React from 'react';
import { Badge, Col } from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate()
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }
  return (
    <div style={{ width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center' }}>
      <WrapperHeader style={{ width: '85%', display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
        
        <Col span={5}>
          <WrapperTextHeader style={{ whiteSpace: 'nowrap' }}>HOC LAI REACT</WrapperTextHeader>
        </Col>
        

        <Col span={13}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm kiếm"
            placeholder="input search text"
          />
        </Col>

        <Col span={6} style={{ display: 'flex', gap: '30px', alignItems: 'center', justifyContent: 'flex-end' }}>
          
          <WrapperHeaderAccount style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <UserOutlined style={{ fontSize: '30px', color: '#fff' }} />
            <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined style={{ color: '#fff' }} />
              </div>
            </div>
          </WrapperHeaderAccount>

          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
          
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;