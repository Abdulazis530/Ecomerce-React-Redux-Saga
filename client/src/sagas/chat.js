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
const read2 = async (path) =>
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
const add2 = async (path, params) =>
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

const remove = async (path) =>
    await request.delete(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });


const PATH = 'products';

// load

function* loadAdds(payload) {
    const {limit,page}=payload
    const QUERY_PATH=`${PATH}?limit=${limit}&page=${page}`
    try {
        const data = yield call(read2, QUERY_PATH)
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
        yield put(actions.loadAddsFailure());
    }
}

function* postChat(payload) {
    const { name, message } = payload;
    let id = Date.now();
    yield put(actions.postChatRedux(id, name, message))
    try {
        const data = yield call(add, PATH, { id, name, message });
        yield put(actions.postChatSuccess(data));
    } catch (error) {
        console.log(error);
        
        yield put(actions.postChatFailure(id));
    }
}
function* postAdds(payload) {
    const { newData, history } = payload;
    const formData = new FormData()
    for (const key in newData) {
        formData.append(key, newData[key])
    }
    try {

        yield call(add2, PATH, formData, {
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
        console.log('here')
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
        yield put(actions.addAddsFailure())

    }

}

function* deleteChat(payload) {
    const { id } = payload;
    yield put(actions.deleteChatRedux(id))
    try {
        const data = yield call(remove, `${PATH}/${id}`);
        yield put(actions.deleteChatSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.deleteChatFailure(id));
    }
}

function* resendChat(payload) {
    const { id, name, message } = payload;
    try {
        const data = yield call(add, PATH, { id, name, message });
        yield put(actions.resendChatSuccess(id));
    } catch (error) {
        console.log(error);
        yield put(actions.postChatFailure(id));
    }
}


export default function* rootSaga() {
    yield all([

        takeEvery('LOAD_ADDS', loadAdds),
        takeEvery('ADD_CHAT', postChat),
        takeEvery('ADD_NEW_ADDS', postAdds),
        takeEvery('REMOVE_CHAT', deleteChat),
        takeEvery('RESEND_CHAT', resendChat),
    ]);
}


