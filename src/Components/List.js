import {BsChevronUp,BsChevronDown,BsTrash} from 'react-icons/bs'

function List({del,update,data: {question, answer, status, id}}) {

    const toShow = () => {
        update(id)
    }

    const toDel = () => {
        del(id)
    }


    return (
        <div>
            <div className='border rounded my-3'>

                <div onClick={toShow} className=' flex cursor-pointer justify-between items-center bg-gray-500 active:bg-gray-700 p-2'>
                    <div>
                        <h4 className='text-white text-2xl font-semibold'>{question}</h4>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <BsTrash onClick={toDel} className='text-red-400 text-xl'/>
                        {
                            status ? <BsChevronUp className='text-white text-2xl'/> : <BsChevronDown className='text-white text-2xl'/>
                        }
                    </div>
                </div>

                <div className={status ? 'block' : 'hidden'}>
                    <p className='p-2'>
                        {answer}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default List;