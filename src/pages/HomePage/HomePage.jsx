import React from 'react'
import TypeProduct from '../TypeProduct/TypeProduct'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from './style'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'


const HomePage = () => {
    const arr = ['TV', 'Tu lanh', 'Lap top']
    return (
        <>
            <div style={{ width: '100%' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div id="container" style={{
                background: '#efefef',
                width: '80%',
                margin: '0 auto',
                padding: '0 15px'
            }}>
                <SliderComponent arrImages={[slider1, slider2, slider3]} />
                <WrapperProduct>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProduct>
                <div style={{ width: '100px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                        border: '1px solid rgb(11, 116, 229)', color: 'rgb(11,116,229)',
                        width: '240px', height: '38px', borderRadius: '4px', background: '#fff'
                    }}
                        styleTextButton={{ fontWeight: 500 }} />
                </div>
            </div>
        </>
    )
}

export default HomePage