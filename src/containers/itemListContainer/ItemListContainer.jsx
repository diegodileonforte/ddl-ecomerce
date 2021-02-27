import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import productList from '../../mocks/productList'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {

    const { categoryId } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList), 1000)
        });

        myPromise.then((result) => {

            let categoryProducts

            if (categoryId !== undefined) {
                categoryProducts = result.filter(product => product.categoryId === categoryId)
            } else {
                categoryProducts = result
            }

            setProducts(categoryProducts)
            setloading(false)
        })
    }, [categoryId]);

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='fw-bold p-2 text-center' id="main-title">{greeting}</h1>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    {loading ? <img src='../../images/loading.svg' alt="" /> : <ItemList products={products} />}
                </Col>
            </Row>
        </Container>
    )
}

export default ItemListContainer