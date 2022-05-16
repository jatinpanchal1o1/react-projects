import React from 'react';
import { Reusheading } from './reusheading';
import img from '../../images/side.png';
import { Link } from 'gatsby';

function Reusdualinfo({heading}) {
    return (
        <section className='bg-info my-5 py-4'>
            <div className='container'>
                <Reusheading title={heading}/>
                <div className='row'>
                    <div className='col-8 mx-auto text-center'>
                      <p className='text-white'>Commodo reprehenderit enim exercitation qui et anim esse velit. Velit aliquip sunt consectetur occaecat aliqua magna proident excepteur exercitation non officia ipsum minim dolore. Eu incididunt esse deserunt velit. Ut non est enim reprehenderit amet sint eiusmod ullamco velit officia ex. Tempor sint mollit esse sint do officia ex ex consectetur. Aliqua id sint culpa duis id aliqua tempor. Irure ad duis non sunt do consectetur veniam veniam pariatur fugiat officia voluptate duis.
                          Velit velit cillum sunt minim officia commodo in elit sunt elit mollit. Consectetur id adipisicing nostrud eiusmod. Sint occaecat magna dolore magna elit esse eiusmod pariatur eiusmod fugiat esse duis. Dolor sit Lorem in et.
                      </p>
                    </div>
                    <div className='col-4'>
                    <Link to='/service'><img src={img} className="rounded float-end" alt="image"/></Link>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Reusdualinfo;