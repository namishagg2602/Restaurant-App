import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getSuggestedQuery } from '@testing-library/react';

const MenuItem = ({obj}) => {
  const { item_name, item_price, qty, item_id, table_id, item_category } = obj;
  const [qty_ord,Setqty_ord]= useState(0);
  const [data,setdata] = useState([]);

    const handleDecrement = () =>
    {
        if(qty_ord === 0)
        {
            alert("Items cannot be less than 0");   
        }
        else
        {
            Setqty_ord(qty_ord-1);
        }
    }

    const handleIncrement = () =>
    {
        Setqty_ord(qty_ord+1);
        
    }

    const addtocart =(e)=>{
        e.preventDefault();

        if(qty_ord>0)
        {

        const items = { qty_ord, table_id, item_id, item_name, item_price};

        fetch("http://localhost:8080/cart/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(items)
        }).then(()=>{
            console.log("New item added")
        })

        }
        else{
            alert('No item selected');
        }
    }

    // const handleAddToCart = (e) =>{
   
    //     e.preventDefault()
    //     var flag=false;

    //     axios.get("http://localhost:8080/cart/getAll")
    //         .then(res => {console.log(res)
    //                         setdata(res.data)})
    //         .catch(err=>{
    //             console.log(err)
    //         }) 

    //         var qty=0;
    //         var prmkey = 1;
        
    //     data.map(function(cartrow,i){

    //         if(cartrow.item_id==item_id && cartrow.table_id==table_id)
    //         {
    //             flag=true;
    //             qty=cartrow.qty_ord;
    //             prmkey=cartrow.prmkey;
    //         }
    //         return(
    //             <div></div>
    //         );
    //     })

        
        

    //     if(flag==true)
    //     {
    //         Setqty_ord(qty_ord+qty);
    //         const item = {prmkey, qty_ord, table_id, item_id, item_name, item_price};
    //         fetch(`http://localhost:8080/cart/update/${prmkey}`,
  
    //   {
  
    //     method:`PUT`,
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify(item)
  
    //   }).then((response )=>{
    //       //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
    //         //console.log(response)
  
    //   })
    //     }
    //     else{

    //     const items = { qty_ord, table_id, item_id, item_name, item_price};

    //     fetch("http://localhost:8080/cart/add",{
    //         method:"POST",
    //         headers:{"Content-Type":"application/json"},
    //         body:JSON.stringify(items)
    //     }).then(()=>{
    //         console.log("New item added")
    //     })
    // }
    // }
   
        return(
            <div className='menu-item-block' >
            <tr >

                <td width ="300px" className='menu-items'><h3>{item_name}</h3></td>
                <td width ="200px"><h3> Rs. {item_price}</h3></td>
                <td width ="200px" rowSpan="2" className='cart-items'>
                <button className="dec-button" onClick={handleDecrement}>-</button>
                <p>{qty_ord}</p>
                <button className="inc-button" onClick={handleIncrement}>+</button>
                </td>
                <td width ="280px"><Button className='btn-primary' onClick={addtocart}><span class="bi bi-cart-plus"></span>  ADD TO CART</Button></td>
                
            </tr>
            </div>
        );
    

//   return (
//     <div className='menu-item-block'>
//         <table >
//             <thead></thead>
//             <tbody>
//             <tr>
//                 <td rowSpan="2"><img alt='food' /></td>
//                 <td className=''><h3>{name}</h3></td>
//                 <td><h3> Rs. {price}</h3></td>
//                 <td rowSpan="2" className='cart-items'>
//                 <button className="dec-button" onClick={handleDecrement}>-</button>
//                 <p>{qty_ord}</p>
//                 <button className="inc-button" onClick={handleIncrement}>+</button>
//                 </td>
//             </tr>
//             {/* <tr key={id}>
//                 <td>{desc}</td>
//                 <td>&nbsp;</td>
//             </tr> */}
//             </tbody>
//         </table>
// {/*         
//         <div className='menu-item-block'>
//             <div className=''>
//                 <img src={img} alt='food' />
//                 <span>{name}</span>
//                 <p className=''>
//                 <small>{info}</small>
//                 </p>
//             </div>
            
//             <div className='cart-items f-r'> Rs. {price}
//                 <button className="dec-button" onClick={handleDecrement}>-</button>
//                 <p>{qty_ord}</p>
//                 <button className="inc-button" onClick={handleIncrement}>+</button>
//             </div>
            
//         </div>  */}

//     </div>
//   );
};



export default MenuItem;