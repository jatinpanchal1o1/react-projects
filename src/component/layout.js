import React from 'react';
import ProtoType from 'prop-types'
import Navbar from './reusable/navbar';
import Footer from './reusable/footer';



function Layout({children}) {
    return (
        <div>
            <Navbar/>
            
            {children}

            <Footer/>
        </div>
    );

}

Layout.protoType = {
    children: ProtoType.node.isRequired
}

export default Layout;