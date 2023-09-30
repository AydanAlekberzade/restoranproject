import { Dropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const LoginBtn = () => {
    const userData:any =  localStorage.getItem("user")
    const adminData:any =  localStorage.getItem("admin")
  
    const nameFunc=()=>{
      window.location.reload()
      localStorage.removeItem("user")
    }
    const adminFunc=()=>{
      window.location.reload()
      localStorage.removeItem("admin")
    }
  
    const logFunc =()=>{
      if(userData === null && adminData === null){
        return(
          <LinkContainer to="/admin">
          <button className="btn" type="button">
            Login
          </button>
        </LinkContainer>
        )
      }
      else if(localStorage.getItem("user") && adminData === null){
        return(
          <>
          <LinkContainer to="/shop">
          <Dropdown>
         <Dropdown.Toggle variant='' id="dropdown-basic">
         <i className="fa-solid fa-user"></i> {localStorage.getItem("user")}
         </Dropdown.Toggle>
   
         <Dropdown.Menu>
           <Dropdown.Item onClick={nameFunc}>Log Out</Dropdown.Item>
      <LinkContainer to='/admin'>
      <Dropdown.Item href="#/action-1">Change user</Dropdown.Item>
      </LinkContainer>     
         </Dropdown.Menu>
       </Dropdown>
        </LinkContainer>   
       
       </>
        )
      }else if(localStorage.getItem("admin") && userData === null){
        return(
          <LinkContainer to="/admin">
          <Dropdown>
         <Dropdown.Toggle variant='' id="dropdown-basic">
         Admin: {localStorage.getItem("admin")}
         </Dropdown.Toggle>
         <Dropdown.Menu>  
    <LinkContainer to='/admin'>
    <Dropdown.Item onClick={adminFunc}>Log Out</Dropdown.Item>
    </LinkContainer>
  
      
         </Dropdown.Menu>
       </Dropdown>
          </LinkContainer>
        )
      }
    }




  return (
    <>{logFunc()}</>
  )
}

export default LoginBtn
