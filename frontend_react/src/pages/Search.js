import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import  Card  from '../components/Card/Card';
import CloseButton from '../assets/icon/close-white.svg'
import './Search.scss';

const Search = ({sets, setOrders, orders, prod}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSet, setFilteredSet] = useState([]);

  useEffect(() => {
    if (!inputValue) {
      setFilteredSet([]);
      return;
    }

    const filtered = sets.filter(item =>
      item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.description?.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSet(filtered);
  }, [inputValue, sets]);


  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='search'>
      <div className="container search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="orderNote"
            placeholder="Пошук"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Link 
            to='/'
            className='search__btn'
            >
            <img src={CloseButton} alt="CloseButton" />
          </Link>
        </form>
        <div className="search__items">
          {filteredSet.map(item => (
            <Card key={item._id} item={item} setOrders={setOrders} orders={orders}/>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Search;
