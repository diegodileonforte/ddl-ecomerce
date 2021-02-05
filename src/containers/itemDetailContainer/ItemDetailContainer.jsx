import React from 'react'
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from '../../components/ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState(null)

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => resolve({id: 1, name: "Bulbasaur", price: 500, description: "Deco", initial: 1, stock: 10, imgUrl: '../../images/pk-bulbasaur.jpg'}), 2000)
        });

        getItem.then((result) => setProductDetail(result))
    }, []);

    return (
        <Container>
            {productDetail && <ItemDetail productDetail={productDetail} />}
        </Container>
    )
}

export default ItemDetailContainer
