import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});


const read = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });
const readDetailAdds = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const add = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const update = async (path, params) =>
    await request.put(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });




const PATH = 'adds';

// load

function* loadAdds(payload) {
    const { limit, page } = payload
    const QUERY_PATH = `${PATH}?limit=${limit}&page=${page}`
    try {
        const data = yield call(read, QUERY_PATH)
        yield put(actions.loadAddsSuccess(data));
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'warning',
            title: "Network connection trouble!",
            text: "Call administator to fix the issue",
            type: "warning",
            buttons: true,
            dangerMode: true,
            timer: 1500
        })

    }
}
function* loadAddsDetail(payload) {
    const { id } = payload
    const QUERY_PATH = `${PATH}/${id}`
    try {
        const data = yield call(readDetailAdds, QUERY_PATH)
        yield put(actions.loadDetailAddsSuccess(data));
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'warning',
            title: "Network connection trouble!",
            text: "Call administator to fix the issue",
            type: "warning",
            buttons: true,
            dangerMode: true,
            timer: 1500
        })

    }
}


function* postAdds(payload) {
    const { newData, history } = payload;
    const formData = new FormData()
    for (const key in newData) {
        formData.append(key, newData[key])
    }
    try {

        yield call(add, PATH, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'New Adds added successfully!',
            showConfirmButton: false,
            timer: 1200
        }).then(() => history.push('/'))

    } catch (error) {
        Swal.fire({
            icon: 'warning',
            title: "Network connection trouble!",
            text: "Call administator to fix the issue",
            type: "warning",
            buttons: true,
            dangerMode: true,
            timer: 1500
        })


    }

}
function* updateAddsDetail(payload){
    const {id,vote,history} =payload
    console.log('updatae adss')
    console.log(vote)
    // const{updateData:{brand,}}
    const QUERY_PATH = `${PATH}/${id}`
    const result= yield call(update, QUERY_PATH,{vote})
    try {
        yield put(actions.resetDetailAdds())
       console.log(result)
    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: 'warning',
            title: "Something went Wrong!",
            text: "Call administator to fix the issue",
            type: "warning",
            buttons: true,
            dangerMode: true,
            timer: 1500
        }).then(()=>history.push(`/detail/${id}`))
    }
}



export default function* rootSaga() {
    yield all([

        takeEvery('LOAD_ADDS', loadAdds),
        takeEvery('ADD_NEW_ADDS', postAdds),
        takeEvery('LOAD_DETAIL_ADDS', loadAddsDetail),
        takeEvery('UPDATE_VOTE',updateAddsDetail)
    ]);
}


