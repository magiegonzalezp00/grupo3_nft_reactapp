import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';

function ContentWrapper() {
    const [totalProducts, setTotalProducts] = React.useState(0)
    const [totalPremium, setTotalPremium] = React.useState(0)
    const [mostPurchased, setMostPurchased] = React.useState(0)
    const [lastProductInDb, setLastProductInDb] = React.useState(null)
    const [products, setProducts] = React.useState(null)
    
    React.useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTotalProducts(data.count)
                setTotalPremium(data.countByCategory.premium)
                setMostPurchased(data.countByCategory['Más comprados'])
                setLastProductInDb(data.products[data.products.length-1])
                setProducts(data.products)
            })
    }, [])
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop
                        totalProducts={totalProducts}
                        totalPremium={totalPremium}
                        mostPurchased={mostPurchased}
                        lastProduct={lastProductInDb}
                        products={products}
                    />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;