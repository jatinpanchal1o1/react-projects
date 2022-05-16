import React, { Component } from 'react';
import '../../util/css/style.css'

class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            courses: props.courses.edges,
            mycourses: props.courses.edges
        }
    }
    render() {
        
        return (
            <section>
                <br/>
                <br/>
                <div className='container'>
                    <div className='row'>
                {this.state.mycourses.map(({node})=>{
                    return(
   
                    <div key={node.id} className='col-10 col-sm-6 d-flex mx-auto'>
                        <div className="card mb-3 bg-dark">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={node.url} className="img-fluid rounded-start" alt={node.title}/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-white">{node.title}</h5>
                                <p className="card-text text-white">{node.description}</p>
                                <p className="card-text"><small className="text-mute text-white">Just ${node.price}</small></p>
                            </div>
                            <div className="text-end my-2 mx-2">
                            <button className="snipcart-add-item btn btn-warning text-white"
                                data-item-id={node.id}
                                data-item-price="79.99"
                                data-item-url="https://cart1234.com"
                                data-item-description={node.description}
                                data-item-image={node.url}
                                data-item-name={node.title}>Add to cart
                            </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            
                    )
                    }
                    )}
                    </div>  
                </div>
            </section>
        )
    }
}

export default Cart;