import { toast } from 'react-hot-toast';
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
const CartItem = ({item, itemIndex}) => {
const dispatch= useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }
  return (
    <div className='grid grid-cols-2 gap-0 w-[40vw] border-2 border-gray my-3  justify-evenly p-5 min-w-[350px] '>
    <div className="  flex  flex-col flex-wrap">
      <img src={item.image}  className="  justify-center h-[80%] w-[40%]  items-center mx-10 proimage"/>
      </div>
      <div className=''>
        <h1 className='font-semibold text-xl shivani'>{item.title}</h1>
        <h1 className='shivani'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
      </div>
      <div>
        <p className='shivani text-green-500 font-bold text-xl m-3 ml-10 w-fit p-0 mt-5 rounded'>  Price : ${ item.price}</p>
      </div>
      <div className='flex justify-end'>
        <AiFillDelete onClick={removeFromCart} className=' cursor-pointer text-3xl  mr-3'/>
      </div>
    </div>
    
  );
};

export default CartItem;
