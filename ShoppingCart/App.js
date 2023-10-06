import { Col, Container, Row } from 'reactstrap';
import './App.css';
import BuyPage from './Components/BuyPage';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Cart from './Components/Cart';
import "bootstrap/dist/css/bootstrap.min.css"

function App()
{
  const [cartItem, setCartItem] = useState([]);
  const addInCart = item =>
  {
    const isAlreadyAdded = cartItem.findIndex(function (array)
    {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1)
    {
      toast("Already added in the cart", {
        type: "error"
      });

      alert("already added in the cart");

      return;  // to skip from this step
    }



    setCartItem([...cartItem, item]);
  };

  const buyNow = () =>
  {
    setCartItem([]);

    toast("Purchase Complete", {
      type: "success"
    });

    alert("Purchase done");
  };

  const removeItem = item =>
  {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart}></BuyPage>
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
