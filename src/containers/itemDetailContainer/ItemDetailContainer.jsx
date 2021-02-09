import React from 'react'
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import productList from '../../mocks/productList';


const ItemDetailContainer = () => {

    const {id} = useParams()
    const [productDetail, setProductDetail] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true);
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList.filter(product => product.id === id)), 1000)
        });

        getItem.then((result) => {
            setProductDetail(result)
            setloading(false)
        })
    }, [id]);

    if (loading) {
        return <Container>
            <img src='../../images/loading.svg' alt=""/>
        </Container>
    }

    return (
        <Container>
            {productDetail && <ItemDetail productDetail={productDetail} />}
        </Container>
    )
}

export default ItemDetailContainer
