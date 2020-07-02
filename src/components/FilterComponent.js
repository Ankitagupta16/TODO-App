import React from 'react';
import {getOptions} from '../shared/filter';

const options=getOptions();

export default function Filter(props) {
    const {filter, changeFilter} = props;
    const getClass = (key) => (key === filter ? 'selected' : '');

    return (
        <ul className="filters list-unstyled clearfix">
            {Object.keys(options).map(key => (
                <li key={key}>
                    <a onClick={() => changeFilter(key)} className={getClass(key)}>
                        {options[key]}
                    </a>
                </li>
            ))}
        </ul>
    );
}