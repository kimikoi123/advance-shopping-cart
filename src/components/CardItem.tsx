import { useState } from "react"
import { Card, Button, Stack } from "react-bootstrap"
import formatCurrency from "../utils/formatCurrency"
import { useStoreContext } from "../contexts/StoreContext"

interface ItemProps {
  id: number
  imageSrc: string
  name: string
  price: number
}

function CardItem({ id, imageSrc, name, price }: ItemProps) {
  const { handleAddQuantity, handleMinusQuantity, getQuantityId, handleRemove } = useStoreContext()

  return (
    <Card className="mb-4">
      <Card.Img
        variant="top"
        src={imageSrc}
        style={{ height: "400px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <div>{name}</div>
          <div className="text-secondary">{formatCurrency(price / 100)}</div>
        </Card.Title>
        <Card.Text></Card.Text>
        {getQuantityId(id) > 0 ? (<div className="d-flex flex-column align-items-center gap-2">
          <Stack className="mx-auto gap-3" direction="horizontal">
            <Button onClick={() => handleMinusQuantity(id)}>-</Button>
            <div>{getQuantityId(id)} in cart</div>
            <Button onClick={() => handleAddQuantity(id)}>+</Button>
          </Stack>
          <Button className="w-auto" variant="danger" onClick={() => handleRemove(id)}>Remove</Button>
        </div>) : (<Button className="w-100" variant="primary" onClick={() => handleAddQuantity(id)}>
          Add to Cart
        </Button>)}
        
        
      </Card.Body>
    </Card>
  )
}

export default CardItem
