export const add_Note = (title, date) => {
    return {
        type: "ADD_NOTE",
        title:title,
        date: date
    }
}

export const remove_Note = (id) => {
    return {
        type: "REMOVE_NOTE",
        id
    }
}


export const clear_Notes = () => {
    return {
        type: "CLEAR_NOTES"
    }
}
