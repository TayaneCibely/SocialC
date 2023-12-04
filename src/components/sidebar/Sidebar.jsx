import "./sidebar.css"
import { Link } from "react-router-dom"

export default function sidebar(){
    return(
        <div>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                     <Link to="/" style={{textDecoration:"none"}} />
                       <span className="siderbarListItemText">Página Inicial</span>
                       <span className="siderbarListItemText">Meu Perfil</span>
                       <span className="siderbarListItemText">MarketPlace</span>
                       <span className="siderbarListItemText">Sair</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}