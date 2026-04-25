import React from 'react'
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent'

const ProductDetailPage = () => {
  return (
    <div style={{ 
        width: '100%', 
        background: '#efefef', 
        minHeight: '100vh',
        display: 'flex',        
        justifyContent: 'center'   
    }}>
        
        <div style={{ width: '75%', paddingTop: '20px' }}>
            <h5 style={{ margin: '0 0 10px 0', fontWeight: 'normal' }}>
                Trang chủ
            </h5>

            <div style={{ 
                background: '#fff', 
                borderRadius: '4px', 
                padding: '20px' 
            }}>
                <ProductDetailComponent />
            </div>

        </div>

    </div>
  )
}

export default ProductDetailPage