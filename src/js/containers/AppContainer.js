import React from 'react';
import CohortGraph from 'react-cohort-graph';

const AppContainer = (props) => (
  <div>
    <h1>Cohortz 4 lyfe</h1>
    <CohortGraph data={props.data} />
  </div>
);

export default AppContainer;
