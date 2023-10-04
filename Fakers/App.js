import React, { } from 'react'
import { useFaker } from 'react-fakers'
import { Container } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"



const App = () =>
{
  const { success, error, loading } = useFaker({
    type: 'products',
    params: { products: { quantity: 10 } }
  })

  if (error)
  {
    alert(error.message)
  }

  return (
    <Container>
      {!loading && <h4>Loading....</h4>}
      <table class="table-primary" >
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Product</th>
          <th scope="col">Net price</th>
          <th scope="col">Tax</th>
          <th scope="col">Total price</th>
        </tr>

        <tbody >
          {loading &&
            success.map((val, id) => (
              <tr key={val.id} padding="1">
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.net_price}</td>
                <td>{val.taxes}</td>
                <td>{val.price}</td>
              </tr>
            ))}


        </tbody>

      </table>

    </Container>

  )
}

export default App
