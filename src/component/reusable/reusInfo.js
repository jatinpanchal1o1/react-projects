import React from 'react';
import { Reusheading } from './reusheading';
import { Link } from 'gatsby';

function ReusInfo({heading}) {
    return (
        <section className='bg-info my-5 py-4'>
            <div className='container'>
            <Reusheading title={heading}/>
        <div className='row'>
            
            <div className='col-10 col-sm-8 mx-auto text-center'>
                <p className='text-white'>
                     Nostrud excepteur nostrud aliqua aute non qui. Ipsum enim minim commodo ex ipsum ea nisi exercitation officia velit aliquip. Exercitation consectetur reprehenderit mollit elit dolore sunt. Amet in incididunt et Lorem. Eu est enim esse mollit ipsum. Cillum esse ut nisi veniam cillum.
                     Excepteur pariatur do aute labore duis aliqua ad magna consectetur minim occaecat aliquip Lorem. Fugiat est voluptate ut aliqua ut fugiat et ea. Enim exercitation deserunt ipsum id. Amet excepteur incididunt aliquip incididunt id nostrud ut quis irure qui commodo sint voluptate amet. Esse non sint laboris ea sunt et.
                     Aliquip ullamco quis duis do adipisicing laboris. Mollit esse amet sunt sint officia aliquip reprehenderit occaecat minim nostrud velit velit magna. Qui sint et elit esse occaecat occaecat elit pariatur mollit mollit. Sint ex ut excepteur id aliquip exercitation et cupidatat duis ut do ipsum nostrud amet. Laboris occaecat nostrud ut labore in esse aliquip in ullamco fugiat ut.   
                </p>
              <Link to='/about'>  <button className='btn btn-warning text-white'>{heading}</button> </Link>
            </div>

        </div>
        </div>
        </section>
    );
}

export default ReusInfo;