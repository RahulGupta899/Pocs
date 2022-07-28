import './Styles/Information.css'
import Buttons from './Buttons'
import OrderDetails from './OrderDetails';
import Pagination from './Pagination';
import React from 'react'

function Information(){
    let orders = [
        {
            channel:"shopyfy",
            orderNo:"#1047523",
            orderDate:"23-04-2019",
            city:"Siliguri",
            customerName:"Rahul Gupta",
            orderValue:"435",
            status:"Pending",
            operation:"Action"
        },
        {
            channel:"shopyfy",
            orderNo:"#9808623",
            orderDate:"21-06-2016",
            city:"Lucknow",
            customerName:"Wriddham Saha",
            orderValue:"768",
            status:"Pending",
            operation:"Action"
        },
        {
            channel:"shopyfy",
            orderNo:"#7865093",
            orderDate:"13-02-2017",
            city:"siliguri",
            customerName:"Alia Bhandari",
            orderValue:"205",
            status:"Pending",
            operation:"Action"
        },
        {
            channel:"shopyfy",
            orderNo:"#9087621",
            orderDate:"01-08-2019",
            city:"Kolkata",
            customerName:"Dhruv Saha",
            orderValue:"875",
            status:"Pending",
            operation:"Action"
        },
        {
            channel:"shopyfy",
            orderNo:"#5278663",
            orderDate:"09-04-2019",
            city:"Mohali",
            customerName:"Pranab Das",
            orderValue:"840",
            status:"Pending",
            operation:"Action"
        },
        {
            channel:"shopyfy",
            orderNo:"#1092234",
            orderDate:"23-04-2019",
            city:"siliguri",
            customerName:"Hismanshi Bhatt",
            orderValue:"330",
            status:"Pending",
            operation:"Action"
        },
        {
            channel:"shopyfy",
            orderNo:"#9074523",
            orderDate:"23-04-2019",
            city:"siliguri",
            customerName:"Sulekha Gupta",
            orderValue:"750",
            status:"Pending",
            operation:"Action"
        },
        {
            channel:"shopyfy",
            orderNo:"#2947523",
            orderDate:"23-04-2019",
            city:"siliguri",
            customerName:"Ananya Rai",
            orderValue:"435",
            status:"Pending",
            operation:"Action"
        }
    ]
    let [currentPage,setCurrentPage] = React.useState(1);
    let itemsPerPage = 3;
    const updateCurrentPage = function(pg){
        setCurrentPage(pg);
    }
    
    return(
        <div className='information shadow-lg ml-2 bg-white py-4'>
            <Buttons/>
            <OrderDetails orders={orders} updateCurrentPage={updateCurrentPage} currentPage={currentPage} itemsPerPage = {itemsPerPage}/>
            <Pagination totalItems={orders.length} limit={itemsPerPage} updateCurrentPage={updateCurrentPage}/>
        </div>
    )
}
export default Information; 