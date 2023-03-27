import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { BsCartFill } from "react-icons/bs"
import { useStoreContext } from "../contexts/StoreContext"

function NavMenu() {
  const { totalCartQuantity, handleShow } = useStoreContext()

  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/store">
          Store
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
      </Nav.Item>

      {totalCartQuantity > 0 && (<div
        className="d-flex position-relative ms-auto border rounded-circle border-primary justify-content-center align-items-center border-1"
        style={{ width: "40px", height: "40px", cursor: 'pointer' }}
        onClick={() => handleShow()}
      >
        <BsCartFill className="text-primary" />
        <div className="d-flex justify-content-center align-items-center position-absolute end-0 bottom-0 text-light bg-danger rounded-circle" style={{width: '15px', height: '15px', fontSize: '11px'}}>{totalCartQuantity}</div>
      </div>)}

      
    </Nav>
  )
}

export default NavMenu
