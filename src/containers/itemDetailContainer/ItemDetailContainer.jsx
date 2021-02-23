import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import productList from '../../mocks/productList'


const ItemDetailContainer = () => {

    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true);
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList.find(product => product.id.toString() === id)), 1000)
        });

        getItem.then((result) => {
            setProduct(result)
            setloading(false)
        })
    }, [id]);

    if (loading) {
        return <Container className='d-flex justify-content-center'>
            <img src='../../images/loading.svg' alt=""/>
        </Container>
    }

    return (
        <Container className='d-flex justify-content-center'>
            {product && <ItemDetail product={product} />}
        </Container>
    )
}

export default ItemDetailContainer
