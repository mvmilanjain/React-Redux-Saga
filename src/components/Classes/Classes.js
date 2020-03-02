import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {getClasses} from '../../shared/services/classService';
import {startSpinner, stopSpinner} from '../../store/actions/config';
import {getDateTime} from '../../shared/utils';

const Classes = props => {

    const dispatch = useDispatch();
    const spinner = {
        start: () => dispatch(startSpinner()),
        stop: () => dispatch(stopSpinner())
    };

    const [classList, setClassList] = useState([]);

    useEffect(() => {
        spinner.start();
        getClasses().then(res => {
            spinner.stop();
            if(res && res.data) {
                setClassList(res.data.classes);
            }
        }).catch(error => {
            spinner.stop();
            console.error(error);
        })
    }, []);

    return (
        <div className={'class__container'}>
            <ul className={'class__list'}>
                {classList.map(item => (
                    <li key={item._id} className={'class__item'}>
                        <div className={'class__item_header'}>
                            <h2 className={'class__item_header--main'}>
                                {item.title}
                            </h2>
                            <h5 className={'class__item_header--sub'}>
                                with <span>{item.instructorDetails.name}</span>
                            </h5>
                        </div>

                        <div className={'class__item_details'}>
                            <div className={'class__item_details--time'}>
                                {getDateTime(item.scheduledStart)}
                            </div>
                            <div className={'class__item_details--seats'}>
                                {item.maxStudents-item.numBooked}/{item.maxStudents} left
                            </div>
                        </div>
                        <div className={'class__item_type'}>
                            <h5 className={'class__item_type--category'}>Class Type: </h5>
                            <p className={'class__item_type--value'}>{item.classType}</p>
                        </div>
                        <div className={'class__item_type'}>
                            <h5 className={'class__item_type--category'}>Level: </h5>
                            <p className={'class__item_type--value'}>{item.level}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Classes;