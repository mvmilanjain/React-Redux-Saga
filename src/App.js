import React from 'react';
import {useSelector} from 'react-redux';

import Spinner from './shared/components/Spinner/Spinner';
import Classes from './components/Classes/Classes';

function App() {

    const isLoading = useSelector(state => state.config.isLoading);

    return (
        <React.Fragment>
            <Spinner show={isLoading}/>
            <section className={'main'}>
                <Classes/>
            </section>
        </React.Fragment>
    );
}

export default App;