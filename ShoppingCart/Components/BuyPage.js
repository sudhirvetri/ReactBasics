import Axios from "axios"
import { useEffect, useState } from "react";
import { useFaker } from 'react-fakers'
import { Col, Container, Row } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "ih5L1DTMBserJ6OXeICQVujUiwkab0xoJK7boB52hvvpvN48fQhLTSDO";
const url = "https://api.pexels.com/v1/search?query=cosmetics&per_page=100&page=1";

const BuyPage = ({ addInCart }) =>
{
    const [product, setProduct] = useState([]);
    const { success, error, loading } = useFaker({
        type: 'products',
        params: { products: { quantity: 100 } }
    })


    const fetchphotos = async () =>
    {
        const { data } = await Axios.get(url, {
            headers: {
                Authorization: apiKey
            }
        })

        // console.log(data);


        const { photos } = data;


        const products = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
        }));

        console.log("success :", success)

        const mergedData = products.map((item, index) =>
        {
            return {
                ...item,
                ...success[index]
            }
        })
        //console.log("mergeddata", mergedData);

        setProduct(mergedData);
        console.log("Merged Data: ", product)

    };

    useEffect(() =>
    {
        fetchphotos();
    }, [success]) // the success was not getting triggered on its own during page load, so i declared it here to call it explicitly.



    // useEffect(() =>
    // {
    //     if (success)
    //     {
    //         const mergedData = product.map((item, index) =>
    //         {
    //             return {
    //                 ...item,
    //                 ...success[index]
    //             }
    //         });
    //         setProduct(mergedData);
    //     }
    // }, [success]);



    return (
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>
            <Row>
                {product.map(product =>
                {
                    return (
                        <Col md={4} key={product.id}>
                            <CartItem product={product} addInCart={addInCart} />
                        </Col>
                    )

                })}

            </Row>
        </Container>
    )
}


export default BuyPage;
