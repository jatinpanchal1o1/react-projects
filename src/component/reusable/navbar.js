import * as React from 'react';
import logo from '../../images/logo.png'
import {Link} from 'gatsby'
import {BsFillHouseFill} from 'react-icons/bs'
import { MdMiscellaneousServices, MdOutlineContactSupport } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import {RiProductHuntLine} from "react-icons/ri"
import 'bootstrap/dist/css/bootstrap.min.css'


class Navbar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            className:'collapse navbar-collapse show justify-content-end',
            menu: [
                {id: 1,
                name: "Home",
                url: "/",
                icon: <BsFillHouseFill/>
                },
                {id: 2,
                    name: "Services",
                    url: "/service",
                    icon: <MdMiscellaneousServices/>
                },
                {id: 3,
                    name: "About",
                    url: "/about",
                    icon: <FcAbout/>
                },
                {id: 4,
                    name: "Contact",
                    url: "/contact",
                    icon: <MdOutlineContactSupport/>
                },
                {id: 5,
                    name: "Products",
                    url: "/product",
                    icon: <RiProductHuntLine/>
                }
            ]
        }
    }
    // 
        
    toggle = ()=>{
        // state.className='collapse navbar-collapse show' ? setState({className:'collapse navbar-collapse'}) : setState({className:'collapse navbar-collapse show'})
        this.state.className === 'collapse navbar-collapse show justify-content-end' ?
            this.setState({className:'collapse navbar-collapse'}) :
            this.setState({className:'collapse navbar-collapse show justify-content-end'}) 
    }
    
    render(){
    return (
        <nav className='navbar navbar-expand-sm navbar-light bg-dark'>
          <div className='container-fluid'>
          <Link to="/" className="navbar-brand ml-5">
             <img src={logo} alt='site logo' width='40px'/>
            </Link>
            <button className='btn btn-info navbar-toggler' type='button' onClick={this.toggle}>
             <span className='text-white'>Menu</span>
            </button>
            <div className={this.state.className}>
            <ul className="navbar-nav ml-auto">
                {this.state.menu.map((item)=>{
                    return(
                <li key={item.id} className="nav-item">
                    <Link to={item.url} className='nav-link text-white'>{item.icon}{item.name}</Link>
                </li>    
                )})}
            </ul>    
            </div>
          </div>
        </nav>
    );
}
}

export default Navbar;