/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id:1,
            text:'Complete Java assignment',
            completed:false
        },
        {
            id:2,
            text:'Buy vegetables',
            completed:false
        },
        {
            id:3,
            text:'Pay electricty bill',
            completed:false
        },
        {
            id:4,
            text:'Fix kitchen bulb ',
            completed:false
        },
        {
            id:5,
            text:'Buy home decore',
            completed:false
        }
        ]
}

/**
 * A counter to generate a unique id for a todo item.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}