import React from 'react';
import PropTypes from 'prop-types';
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import FinancialAidPage from './FinancialAidPage';

const RouterPage = (props) => {
    return (
        <Router basename={props.pageInfo.basePath}>
            <Switch>
                {/* Financial Aid Page Route */}
                <Route path="/financial-aid">
                    <FinancialAidPage {...props} />
                </Route>
            </Switch>
        </Router>
    );
};

RouterPage.propTypes = {
    pageInfo: PropTypes.object
};

export default RouterPage;
