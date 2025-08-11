import {createStore} from 'redux'
import ShoesReducer from '../shoesDisplay/ShoesReducer'

const Store = createStore(ShoesReducer)
export default Store