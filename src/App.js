import { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';
import "./components/Loading.css"
import Pagination from './components/Pagination';

function App() {
  const [coins, setCoins]= useState([]);
  const [search, setSearch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const getData = async ()=>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1");
    setCoins(res.data);
  }

  useEffect(()=>{
    getData();
    setLoading(true);
  },[]);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost -postsPerPage;
  const currentCoin = coins.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = (pageNumber)=> setCurrentPage(pageNumber);
  const changePostPerPage = (post)=> setPostsPerPage(post)

  return (
    <div className="container">
      <div className='row'>
        <input type="text" placeholder='Search a Coin' className='form-contol bg-dark text-light border-0 mt-4 text-center' onChange={e => setSearch(e.target.value)}>

        </input>
        <TableCoins coins={currentCoin} search={search} loading={loading}/>
        <Pagination postPerPage={postsPerPage} totalPosts={coins.length} paginate={paginate} currentPage={currentPage} changePostPerPage={changePostPerPage}/>
      </div>
    </div>
  );
}

export default App;
