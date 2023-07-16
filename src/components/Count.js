import PropTypes from 'prop-types';
import { increaseCounterAction, decreaseCounterAction } from '../redux/actions/counterAction'
import { useDispatch, useSelector } from 'react-redux';

export default function Count({ number }) {
    const dispatch = useDispatch()
    const { counter } = useSelector((state) => state.counter)

    const decreaseCounterBtn = () => {
        dispatch(decreaseCounterAction())
    }

    const increaseCounterBtn = () => {
        dispatch(increaseCounterAction())
    }


    return (
        <>
            <div className='flex items-center justify-center gap-2'>
                <div>
                    <button class="h-10 w-10 bg-blue-400 text-white" onClick={decreaseCounterBtn}>-</button>

                </div>
                <div className="text-2xl">
                    {counter}
                </div>
                <div>
                    <button class="h-10 w-10 bg-blue-400 text-white" onClick={increaseCounterBtn}>+</button>
                </div>
            </div>
        </>
    )
}

Count.propTypes = {
    number: PropTypes.number
}