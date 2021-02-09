import './styles.css'
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import productList from '../../mocks/productList'
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {

    const { categoryId } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(false)
    /* console.log(categoryId) */

    useEffect(() => {
        setloading(true);
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList.filter(product => product.categoryId === categoryId)), 1000)
        });

        myPromise.then((result) => {
            setProducts(result)
            setloading(false)
        })
    }, [categoryId]);

    if (loading) {
        return <Container>
            <img className='loading-img' src='../../images/loading.svg' alt="" />
        </Container>
    }

    return (
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
    )
}

export default ItemListContainer