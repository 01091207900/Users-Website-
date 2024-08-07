import Header from "../../componets/Header/Header"
import Footer from "../../componets/Footer/Footer"
import { Outlet } from "react-router-dom"
import './layout.css';
function Layout() {
    return (
      <div className="layout">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
    )
}

export default Layout
