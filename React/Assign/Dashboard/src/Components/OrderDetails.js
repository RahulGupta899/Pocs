import './Styles/OrderDetails.css';
import image from './assets/s.png';
import React from 'react';


function OrderDetails(props){
    console.log("component Rendered");
    let originalData = [...props.orders];
    let currentPage = props.currentPage;
    let itemsPerPage = props.itemsPerPage;
    let updateCurrentPageCall = props.updateCurrentPage;
    let [filteredData,setFilteredData] = React.useState(originalData);

    let filteredDataTemp = [...filteredData];
   
    
    let [searchCustomer,setSearchCustomer] = React.useState("");

    const handleSearch = function(e){
        let text = e.target.value;
        setSearchCustomer(text);
        updateCurrentPageCall(1);   // while searching search from page 1
        console.log(text);
    }

    const compareAsc = function(a,b){
          if(a.orderNo < b.orderNo) return -1;
          else if (a.orderNo > b.orderNo) return 1;
          else return 0;
    }

    const compareDesc = function(a,b){
        if(a.orderNo > b.orderNo) return -1;
        else if (a.orderNo < b.orderNo) return 1;
        else return 0;
    }

    const SortAscOnOrderNo = function(){
        let tempData = [...filteredData];
        tempData.sort(compareAsc);
        console.log(tempData); 
        setFilteredData(tempData);
    }

    const SortDescOnOrderNo = function(){
        let tempData = [...filteredData];
        tempData.sort(compareDesc);
        console.log(tempData);
        setFilteredData(tempData);
    }


    let filText = searchCustomer.trim().toLowerCase();
    if(searchCustomer !== ""){
        filteredDataTemp = filteredDataTemp.filter((item)=>{
            let customerName = item.customerName.toLowerCase();
            // console.log(filText+" "+searchCustomer);
            return customerName.includes(filText);
        })
        console.log(filteredDataTemp);
    }
    
    // handling the page
    let si = (currentPage-1)*itemsPerPage;
    let ei = si+itemsPerPage;
    filteredDataTemp = filteredDataTemp.slice(si,ei);



    return(
        <div className=" h-46 ml-4 mb-2">
            <table className="w-full text-center text-gray-500 dark:text-gray-400">

            <thead  className=" text-gray-700 text-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th className="px-6 py-3"></th>
                    <td className="px-6 py-3"><input type="checkbox"/></td>
                    <th  className="px-6 py-3">Channel</th>
                    <th  className="px-6 py-3">
                        <div className="flex justify-center items-center">
                            <div className="mr-2">Order Number</div>
                            <div className="flex flex-col justify-center">
                                <span onClick={SortAscOnOrderNo} className="material-symbols-outlined cursor-pointer">arrow_drop_up</span>
                                <span onClick={SortDescOnOrderNo}  className="material-symbols-outlined cursor-pointer">arrow_drop_down</span>
                            </div>
                        </div>
                    </th>
                    <th  className="px-6 py-3">Order Date</th>
                    <th  className="px-6 py-3">City</th>
                    <th  className="px-6 py-3">
                        <div>
                            <div>Customer Name</div>
                            <input type="text" value={searchCustomer} onChange={handleSearch} placeholder="Search.." className=""/>
                        </div>
                    </th>
                    <th  className="px-6 py-3">Order value</th>
                    <th  className="px-6 py-3">Status</th>
                    <th  className="px-6 py-3">Operation</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    filteredDataTemp.map(function(item,idx){
                       return (<tr key={idx} className="bg-white text-sm py-12  border-b dark:bg-gray-800 dark:border-gray-700">
                            <td><span Style="font-size:13px;" className=" border material-symbols-outlined cursor-pointer">add</span></td>
                            <td><input type="checkbox"/></td>
                            <td className="text-center"><img  className="inline text-center" src={image}  width="30"></img></td>
                            <td className="py-3" Style="color:#129df9;">{item.orderNo}</td>
                            <td>{item.orderDate}</td>
                            <td>{item.city}</td>
                            <td>{item.customerName} </td>
                            <td>{item.orderValue}</td>
                            <td>
                            <button Style="background:#d7efd7; color:#249924; border-radius:2px;"className="flex justify-center border w-24 text-green-600  h-6 mr-2 border-green-400	">
                                <span className="text-sm">{item.status}</span>
                                <span className="material-symbols-outlined ml-2 icon">expand_more</span>
                            </button>
                            </td>
                            <td>
                                <button Style="border-radius:2px;"className="flex justify-center border w-24  h-6 mr-2 border-black	">
                                    <span className="text-sm">{item.operation}</span>
                                    <span className="material-symbols-outlined ml-2 icon">expand_more</span>
                                </button>
                            </td>
                        </tr>)   
                })
                }
                
            </tbody>

            </table>
        </div>
    )
}

export default OrderDetails;