import React,{useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';
import { MenuData } from './MenuData';
import axios from 'axios';

export const DeleteItem = () => {

    var items=[];
    {MenuData.map((item)=> items.push(item.name))}

    const [menu, setMenu]= useState([]);
    const [name, setName]= useState('');
    const [id,setId]=useState(1);

    useEffect(()=>{
          
        axios.get("http://localhost:8080/menu/getAll")
            .then(res => {console.log(res)
                            setMenu(res.data)})
            .catch(err=>{
                console.log(err)
            }) 
    
      },[])

    const handleSubmit = () =>
    {
        // send the data to SQL
        var id;
        var temp = 0;
        menu.map((value)=> (value.item_name===name ? id=value : temp=2))

        
        
        // console.log(id)
        // fetch("http://localhost:8080/menu/add",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(id)
        // }).then(()=>{
        //     console.log("New item added")
        // })

        // console.log(axios.delete("http://localhost:8080/menu/delete", { params: { id: id } }).then(response => {
        //     console.log(response);
        //   }));
        


    }
    const deleteitem =(id)=>{
      
      console.log(`http://localhost:8080/Order/delete/${id}`);

      fetch(`http://localhost:8080/Order/delete/${id}`,
  
      {
  
        method:`DELETE`
  
      }).then((response )=>{
  
          //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
  
         
  
            //console.log(response)
  
         
  
      })
  
      }
  const fun = (e)=>{
    setName(e.target.value)
    console.log(name);
        var temp = 0;
        menu.map((val)=> (val.item_name===name ? setId(val.item_id) : temp=2))
    console.log(id);
//    setId(e.target.item_id)
  }

  return (
    <div>
        <AdminNavbar/>
    <div className='additem-block'>
       
        <h3>Delete Item</h3>
        <br></br><br></br>
        <form>
        <select className='drop-list' value={name} onChange ={(e)=> fun(e)}>
            {menu.map((value) => (<option key={value.item_id}>{value.item_name}</option>))}
        </select>
        </form>
        <br></br><br></br>

        <Button variant='outline-warning' onClick={deleteitem}>Delete</Button>
       
    </div>
    </div>
  );
}
