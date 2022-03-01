import React from 'react';
import MyCarousel from 'components/Shopping/Carousel';
import './index.scss'
import Selector from 'components/Shopping/Selector';
import ShoppingList from 'components/Shopping/ShoppingList';
import FloatingBar from 'components/Shopping/FloatingBar';

const Shoppingpage = () => {
    return (
        <>
            <header className='header-carousel'>
                <MyCarousel />
            </header>
            <main className='main-selector'>
                <Selector />
            </main>
            <main className='main-shoppings'>
                <ShoppingList/>
            </main>
            <aside className='fixed-bar'>
                <FloatingBar />
            </aside>
        </>
    );
}

export default Shoppingpage;
