import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from './app/store'
import { decrement, increment } from './counter/counnterSlice'

const MyNew = () =>{

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>{
                dispatch(increment())
            }}> Artır</button>

            My New Değeri :  {count}

            <button onClick={()=>{
                dispatch(decrement());
            }}>Azalt</button>
        </div>
    )
}

export default MyNew;