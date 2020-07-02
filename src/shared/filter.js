export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';

export function applyFilter(list, filter) {
    switch (filter) {
        case FILTER_COMPLETED:
            {
                console.log(list.filter(item => item.completed === true));
                return list.filter(item => item.completed === true);
            }

        case FILTER_ACTIVE:
            {
                console.log(list.filter(item => item.completed !==true));
                return list.filter(item => item.completed !== true);
            }

        default:
           {
              console.log(list);
                return list;
           }
    }
}

export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed'
    };
}