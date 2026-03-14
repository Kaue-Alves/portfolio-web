import { AiFillMessage } from "react-icons/ai"
import "./Header.css"

export default function Header() {
  
  return (
    <header>
      <div style={{fontSize: "18px", fontFamily: "Space Grotesk"}}>K.Alves Dev</div>
      <div>Home</div>
      <div className="container-icone">
        <AiFillMessage className="icon-message"/>
      </div>
    </header>
  )
}
