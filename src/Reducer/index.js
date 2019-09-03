import { bake_cookie, read_cookie} from 'sfcookies'

const rootReducer = (state = [], action) => {
    let reminders = [];

    state = read_cookie('reminders'); // read cookie

    if(action.type === "ADD_NOTE") {
        reminders = [...state, {
            id: Math.random(),
            title: action.title,
            date: action.date
        }];
        bake_cookie('reminders', reminders); // create cookie
        console.log(reminders)
        return reminders;
    }

    else if(action.type === "REMOVE_NOTE"){
        reminders = state.filter(remind => remind.id !== action.id) // new array true or false
        // [1, 2, 2, 50] true done // false remove
        bake_cookie('reminders', reminders)
        return reminders;
    }

    else if(action.type === "CLEAR_NOTES"){
        reminders = [];
        bake_cookie('reminders', reminders)
        return reminders;
    }

    return state;
}

export default rootReducer;