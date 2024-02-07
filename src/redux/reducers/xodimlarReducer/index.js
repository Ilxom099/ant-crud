import {editableInputTypes} from "@testing-library/user-event/dist/utils";

function XodimlarReducer(state = {
    xodimlar: [
        {
            id: 1,
            name: "Mark",
            lastname: "Otto",
            phone: "+99894 999 88 88",
            position: "Frontend Developer",
            level: "Senior"
        },
        {
            id: 2,
            name: "Steve",
            lastname: "Jobs",
            phone: "+99894 999 88 88",
            position: "Backend Developer",
            level: "Middle"
        },
    ],
    editData: ""
}, action) {
    switch (action.type) {
        case "ADD_USER" :
            let users = [...state.xodimlar]
            users.push({
                id: state.xodimlar.length + 1,
                name: action.payload.name,
                lastname: action.payload.lastname,
                phone: action.payload.phone,
                position: action.payload.position,
                level: action.payload.level
            })
            state = {...state, xodimlar: users}
            break
        case "DELETE_USER" :
            let a = [...state.xodimlar]
            a.map((item, index) => {
                if (item.id === action.payload) {
                    a.splice(index, 1)
                }
            })
            state = {...state, xodimlar: a}
            break
        case "EDIT_DATA" :
            state = {...state, editData: action.payload}
            break
        case "EDIT_SAVE" :
            let edit = state.xodimlar.map(item => {
                let data = state.editData
                if (item.id === data.id) {
                    item = {
                        ...item,
                        name: action.payload.name,
                        lastname: action.payload.lastname,
                        phone: action.payload.phone,
                        position: action.payload.position,
                        level: action.payload.level
                    }
                }
                return item
            })
            state = {...state, xodimlar: edit}
    }
    return state
}

export default XodimlarReducer