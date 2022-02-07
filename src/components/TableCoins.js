import React from 'react';
import CoinRow from './CoinRow';
import Loading from './Loading';

const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];

const TableCoins = ({coins, search, loading}) => {

    if(!loading){
        return(
           <Loading/>
        );
    }
    let searchingUser=(search=="" ? search : search.toLowerCase());

    const filteredCoins= coins.filter((coin)=> 
        coin.name.toLowerCase().includes(searchingUser) | 
        coin.symbol.toLowerCase().includes(searchingUser)
    );

    return(
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {
                        titles.map((titulo,index) =>(
                            <td key={index}>{titulo}</td>
                        ))
                    }
                    
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin,index)=>(
                    <CoinRow coin={coin} index={index + 1}/>
                ))}
            </tbody>
        </table>
    );
};

export default TableCoins;
