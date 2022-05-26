import React from 'react'
import { DataGrid,} from '@mui/x-data-grid';
import {DeleteOutline,Publish} from '@mui/icons-material';
import Chart from '../../components/chart/chart'

 function Products() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => { 
            return(
                <div className="userlistUser">
                    <img  className="userimg" src={params.row.avatar} alt=""/>
                        {params.row.username}
                </div>
            )}
        
        },
        {field:'email',headerName:'Emil',width: 200,},
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volue',
            width: 160,
          },
          {
            field: 'action',
            headerName:'Action',
            width: 150,
            renderCell:(params) => {
                return (<>
                    
                    <button className="userlistedit">Edit</button>
                    
                    <DeleteOutline className="userlistdelete"/>
                    </>
                ) }
            
          },
         ];
      
      const rows = [
        { id: 1, 
          username:'Jon Snow', 
          avatar:'',
          email: 'fskjdfkndf@kdfj',
          status: 'Active',
          transaction:'$120.00'},
          { id: 2, username: 'Jon Snow', 
  avatar:'',
  email: 'fskjdfkndf@kdfj',
  status: 'Active',
  transaction:'$120.00'},
  { id: 3, username: 'Jon Snow', 
  avatar:'',
  email: 'fskjdfkndf@kdfj',
  status: 'Active',
  transaction:'$120.00'},
  { id: 4, username: 'Jon Snow', 
  avatar:'',
  email: 'fskjdfkndf@kdfj',
  status: 'Active',
  transaction:'$120.00'},
  { id: 5, username: 'Jon Snow', 
  avatar:'',
  email: 'fskjdfkndf@kdfj',
  status: 'Active',
  transaction:'$120.00'},
  { id: 6, username: 'Jon Snow', 
  avatar:'',
  email: 'fskjdfkndf@kdfj',
  status: 'Active',
  transaction:'$120.00'},
  { id: 7, username: 'Jon Snow', 
  avatar:'',
  email: 'fskjdfkndf@kdfj',
  status: 'Active',
  transaction:'$120.00'},
  { id: 8, username: 'Jon Snow', 
  avatar:'',
  email: 'fskjdfkndf@kdfj',
  status: 'Active',
  transaction:'$120.00'},
  { id: 9, username: 'Jon Snow', 
  avatar:'',
  email: 'fskjdfkndf@kdfj',
  status: 'Active',
  transaction:'$120.00'},
  { id: 10, username: 'Jon Snow', 
  avatar:'',
  email: 'fskjdfkndf@kdfj',
  status: 'Active',
  transaction:'$120.00'},
        ];
      
  return (
    <div className="products">
    <div className="products_titleContainer">
     <h1 className="products_title">Products</h1>
     <a href="/newproduct">
     <button className="products_addbutton">Create</button>
     </a>
    </div>
    <div className="products_top">
        <div className="products_topleft">
            
        </div>
        <div className="products_topright">
            <div className="products_infotop">
                <img  className="products_infoimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMdd15M9W7LtvU9GatcvpTkKkxB_dasnR1vExBEp73w&s" alt=""/>
                <span className="products_name">Apple Airpods</span>
            </div>
            <div className="products_infobottom">
            <div className="products_infoitem">
    <span className="products_infokey">id:</span>
    <span className="products_infovelue">123</span>
</div>
                <div className="products_infoitem">
                    <span className="products_infokey">seles:</span>
                    <span className="products_infovelue">$123</span>
                </div>

                <div className="products_infoitem">
    <span className="product_infokey">active:</span>
    <span className="product_infovelue">yes</span>
</div>

<div className="products_infoitem">
    <span className="products_infokey">in stock:</span>
    <span className="products_infovelue">no</span>
</div>
            </div>
        </div>
    </div>
    <div className="products_bottom">
        <form className="products_form">
         <div className="products_formleft">
             <lebel className="products_lb">Product Name</lebel>
             <input type="text" placeholder="Apple Airpods" className="products_inp"/>
             <lebel>In Stock</lebel>
             <select name="inStock" id="idStock">
                 <option value="yes">Yes</option>
                 <option value="no">No</option>
             </select>

             

<lebel>Active</lebel>
<select name="active" id="idActive">
    <option value="yes">Yes</option>
    <option value="no">No</option>
</select>
         </div>
         <div className="products_formright">
             <div className="products-upload">
                 <img  className="products_rigimg" src="data:image/jpeg;base64,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"/>
                 <lebel>
                     <Publish/>
                 </lebel>
                 <input type="file" id="file" style={{display:"none"}}/>
             </div>
             <button className="products_button">Update</button>
         </div>
        </form>
    </div>
    </div>
  )
}
export default Products;