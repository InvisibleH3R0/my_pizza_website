import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    const pizzas = [
        {
            id: '1',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            description: 'A delicious cheese pizza',
            topping: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
            price: 9.99,
        },
        {
            id: '2',
            name: 'Meat Lovers',
            slug: 'meat-lovers-pizza',
            description: 'A pizza topped with all your favorite meats',
            topping: ['cheese','ham','bacon','sausage'],
            image: 'https://images.unsplash.com/photo-1620374645466-dc3ff1558148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: 15.99,
        },
        {
            id: '3',
            name: 'Supreme',
            slug: 'supreme-pizza',
            description: 'A mix of flavors with some of your favorite toppings',
            topping: ['cheese','olives','peppers','mushrooms'],
            image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80',
            price: 13.99,
        },
        {
            id: '4',
            name: 'Pepperoni Pizza',
            slug: 'pepperoni-pizza',
            description: 'A pizza lover classic',
            topping: ['cheese','pepperoni'],
            image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
            price: 10.99,
        },
        {
            id: '5',
            name: 'Smoked Sausage Pizza',
            slug: 'smoked-sausage-pizza',
            description: 'Tasty cheese with smoked sausage topping',
            topping: ['mozzarella cheese','smoked sausage'],
            image: 'https://images.unsplash.com/photo-1600693449340-65ed7161727d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
            price: 12.99,
        },
        {
            id: '6',
            name: 'Hawaian Pizza',
            slug: 'hawaian-pizza',
            description: 'A tropical explosion of flavor',
            topping: ['cheese','ham','pineapple'],
            image: 'https://images.unsplash.com/photo-1597715469889-dd75fe4a1765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            price: 13.99,
        },
    ]

  const [keyword, setKeyword] = useState('');
  
  const filteredPizzas = pizzas.filter(
    pizza =>
    pizza.name.toLowerCase().includes(keyword) || pizza.topping.includes(keyword)
  )

  const onInputChange = (e) =>{
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }  
  return (
    <div>
        <div className={styles.searchWrapper}>
            <input placeholder="Search for pizza or toppings..." className={styles.searchBar} onChange={onInputChange} />
        </div>
        <div className={styles.pizzaContainer}>
            {filteredPizzas < 1 ?
            (
                <div className={styles.nopeContainer}>Sorry, no pizza or topping matches your search.</div>
            )
            :
            (
            filteredPizzas.map(pizza => {
                return(
                    <div className={styles.pizzaItem} key={pizza.id}>
                        <Link href={`/${pizza.slug}`}><a className={styles.pizzaImageBox}>
                            <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                        </a></Link>
                        <div className={styles.pizzaText}>
                            <p className={styles.pizzaHeader}>{pizza.name}</p>
                            <p className={styles.pizzaToppings}>{pizza.topping.map(topping => topping).join(', ')}</p>
                            <p className={styles.pizzaPrice}>${pizza.price}</p>
                        </div>
                    </div>
                )
                })    
            )}
        </div>
    </div>
  )
}
