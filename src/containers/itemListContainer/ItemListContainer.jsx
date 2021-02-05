import './styles.css'
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import productList from '../../mocks/productList'
import ItemList from '../../components/ItemList/ItemList';


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList), 2000)
        });

        myPromise.then((result) => setProducts(result))
    }, []);



    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className='fw-bold p-2 text-center' id="main-title">{greeting}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ItemList products={products} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemListContainer