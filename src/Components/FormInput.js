import {useSelector,useDispatch} from "react-redux";
import {useState} from "react";
import {ChangeInput} from "../slicer/inputSlicer";

function FormInput({inputState}) {

    const [q,setQ] = useState('');
    const [a,setA] = useState('');

    const {inputData} = useSelector(state=>state);

    const dispatch = useDispatch();

    const add = (e) =>{
        e.preventDefault();
        dispatch(ChangeInput(q,a))
    }

    const handleChangeQ = (e) => {
        setQ(e.target.value)
    }

    const handleChangeA = (e) => {
        setA(e.target.value)
    }

    return (
        <div className={`absolute w-[50%] top-[20%] right-[25%] ${inputState?'block':'hidden'}`}>
            <form className='w-[100%] shadow bg-white mx-auto border p-3 rounded'>
                <div className='flex flex-col space-y-2 my-4 px-4'>
                    <label htmlFor="question" className='font-regular text-xl'>Question</label>
                    <input type="text" onChange={handleChangeQ} value={q}  id='question' className='bg-gray-400 text-white border border-2 p-2 rounded outline-none'/>
                </div>
                <div className='flex flex-col space-y-2 mb-4 px-4'>
                    <label htmlFor="answer" className='font-regular text-xl'>Answer</label>
                    <input type="text" onChange={handleChangeA} value={a}  id='answer' className='bg-gray-400 text-white border border-2 p-2 rounded outline-none'/>
                </div>
                <button onClick={add} className='mt-5 border px-8 py-2 bg-blue-500'>Add</button>
            </form>
        </div>
    );
}

export default FormInput;