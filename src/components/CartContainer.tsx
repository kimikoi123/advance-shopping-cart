import { Offcanvas, Stack, Image, CloseButton } from "react-bootstrap"
import { useStoreContext } from "../contexts/StoreContext"
import items from "../constants/items.json"
import formatCurrency from "../utils/formatCurrency"

function CartContainer() {
  const { handleClose, show, cartItems, totalPrice, handleRemove } = useStoreContext()

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((cartItem) => {
            const item = items.find((i) => cartItem.id === i.id)
            return (
              <Stack direction="horizontal" gap={2}>
                <Image
                  src={item?.imageSrc}
                  style={{ width: "40%", height: "80px", objectFit: "cover" }}
                />
                <Stack className="my-auto">
                  <div>
                    {item?.name}{" "}
                    <span style={{ fontSize: "10px" }}>
                      x{cartItem.quantity}
                    </span>
                  </div>
                  <div>{formatCurrency(item!.price / 100)}</div>
                </Stack>
                <div>
                  {formatCurrency((cartItem.quantity * item!.price) / 100)}
                </div>
                <CloseButton onClick={() => handleRemove(cartItem.id)} />
              </Stack>
            )
          })}

          <div className="ms-auto">
            Total: {formatCurrency(totalPrice / 100)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default CartContainer
