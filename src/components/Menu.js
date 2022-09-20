import React, {useState, useEffect} from 'react';
import MenuItem from './MenuItem';
import { MenuData } from './MenuData';
import { CustomerNavbar } from './CustomerNavbar';
import axios from 'axios';
import Footer from './Footer';



const Menu = () => {

    const [counter,Setcounter]= useState(0);

    const handleDecrement = () =>
    {
        if(counter === 0)
        {
            alert("Items cannot be less than 0");   
        }
        else
        {
            Setcounter(counter-1);
        }
    }

    const handleIncrement = () =>
    {
        Setcounter(counter+1);
        
    }

    const [data,setMenu]=useState([]);
    const [categories,Setcategories]=useState([]);
    const [tableno,Settableno]=useState();
    var tablenumbers=[1,2,3,4,5,6,7,8,9];

    const unique = (value,index,self)=>
    {
        return self.indexOf(value)===index
    }

    useEffect(()=>{
          
        axios.get("http://localhost:8080/menu/getAll")
            .then(res => {console.log(res)
                            setMenu(res.data)})
            .catch(err=>{
                console.log(err)
            }) 

            var cat=[];
            data.map((item)=>(cat.push(item.item_category)))
            Setcategories(cat.filter(unique))
            // console.log(categories);



      },[data])

   
    return (
        <>
        <div className=''>
             <CustomerNavbar/>
            <center>
                <h1 className='menu-head'>Menu</h1>
                <h5>
                    Table No. <span></span>
                    <select value={tableno} onChange={(e)=>Settableno(e.target.value)}>
                        {tablenumbers.map((value)=>(<option value={value} key={value}>{value}</option>))}
                    </select>
                </h5>
                <div className=''>
                    <table>
                        <thead></thead>
                        <tbody>
                            {categories.map(function(category)
                            {
                                return(
                                    <center>
                                    <div>
                                        <h2 className='category-block'>{category}</h2>
                                    
                                        {data.map(function(item,i){
                                            var obj={
                                                item_name : item.item_name,
                                                item_price : item.item_price,
                                                qty : item.qty_avl,
                                                item_id : item.item_id,
                                                table_id : tableno,
                                                item_category : item.item_category,
                                            };
                                            return(
                                            (item.item_category===category?<MenuItem key={i} obj={obj}/>:'')
                                            );
                                        })}
                                        <br></br>
                                    </div>
                                    </center>

                                );
                            })}
                {/* {data.map((item,i)=>(<MenuItem key={i} item={item}/>))} */}
                    {/* // <div className='menu-item-block'>
                    // return(
                    //     <tr className='menu-item-block' key={i}>
                    //         <td rowSpan="2"><img alt='food' /></td>
                    //         <td className=''><h3>{item.item_name}</h3></td>
                    //         <td><h3> Rs. {item.item_price}</h3></td>
                    //         <td rowSpan="2" className='cart-items'>
                    //         <button className="dec-button" onClick={handleDecrement}>-</button>
                    //         <p>{counter}</p>
                    //         <button className="inc-button" onClick={handleIncrement}>+</button>
                    //         </td>
                    //     </tr>
                    // ); */}
            
{/*     
                } )
            } */}
            </tbody>
            </table>
                </div>
                
            </center>
        </div>
        <Footer></Footer>
        </>
    )
};

export default Menu;
 {/* => ( <MenuItem key={i} item = {item} />) */}
