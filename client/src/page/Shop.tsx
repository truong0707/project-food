import React from 'react';
import CardProduct from '../components/CardProduct';
import Footer from '../components/Footer';
// import './Page.css';

export default function Shop() {
    return (
        <>
            <div style={{ background: '', width: '90%', margin: 'auto', marginTop: '100px', marginBottom:'50px'}} className='wrap_shop'>
                <h1>Delivery menu</h1>

                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'  }}>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
