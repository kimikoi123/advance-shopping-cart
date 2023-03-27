import { Container, Row, Col } from "react-bootstrap"
import items from "../constants/items.json"
import CardItem from "../components/CardItem"

function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row lg={3} md={2} xs={1}>
        {items.map((item) => (
          <Col key={item.id}>
            <CardItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store
