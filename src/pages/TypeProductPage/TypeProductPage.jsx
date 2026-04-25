import React from 'react'
import { Col, Pagination, Row } from 'antd'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
    const onChange = () => {}
  return (
    <div style={{ width: '100%', background: '#efefef', minHeight: '100vh' }}>

        <div style={{ width: '80%', margin: '0 auto' }}>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                <WrapperNavbar span={4}>
                    <NavBarComponent />
                </WrapperNavbar>

                <Col span={20}>
                    <WrapperProducts>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </WrapperProducts>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '20px' }}>
                        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                    </div>
                </Col>

            </Row>
        </div>
    </div>
    )
}

export default TypeProductPage