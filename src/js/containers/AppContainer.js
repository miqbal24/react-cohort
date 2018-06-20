import React from 'react';
import CohortGraph from 'react-cohort-graph';

const AppContainer = (props) => (
  <div>
    <h1>Lifetime Value Cohort</h1>
    <CohortGraph data={props.data} dataType='123' defaultValueType='value' />
  </div>
);

export default AppContainer;
