import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { getFirestore } from '../../firebase'


const ItemDetailContainer = () => {

    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        const db = getFirestore();
        const itemCollection = db.collection("items")

        itemCollection.get().then((result) => {
            const products = result.docs.map(doc => doc.data())

            let productById = products.find(product => product.id.toString() === id)

            setProduct(productById)
            setloading(false)
        })
    }, [id]);

    if (loading) {
        return <Container className='d-flex justify-content-center'>
            <img src='../../images/loading.svg' alt="" />
        </Container>
    }

    return (
        <Container className='d-flex justify-content-center'>
            {product && <ItemDetail product={product} />}
        </Container>
    )
}

export default ItemDetailContainer
