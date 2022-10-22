import {useSelector,useDispatch} from "react-redux";
import List from "./List";
import {Toggle, Add, Delete} from "../slicer/slicer";
import FormInput from "./FormInput";
import {useState} from "react";

function Faq(props) {

    const [inputState,setInputState] = useState(false);

    const {list} = useSelector(state=> state);

    const  dispatch = useDispatch();

    const update = (id) => {
        dispatch(Toggle(id))
    }

    const add = () => {
        setInputState(pre=>!pre);
        dispatch(Add())
    }

    const del = (id) => {
        dispatch(Delete(id))
    }



    return (
        <div className='relative'>
            <div className='text-end my-5'>
                <button onClick={add} className='border px-8 py-2 rounded bg-blue-500 text-white'>Add</button>
            </div>
            {
                list.map(el=><List key={el.id} del={del} update={update} data={el}/>)
            }
            <FormInput inputState={inputState}/>
        </div>
    );
}

export default Faq;