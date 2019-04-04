import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { DocumentsState } from 'reducers/documents';
import ApplicationState from 'store/ApplicationState';

interface HomeProps extends RouteComponentProps<any> {
  documents: DocumentsState;
}

function Home(props: HomeProps) {
  return (
    <div>
      <h1>Home</h1>
      {props.documents.name}
    </div>
  );
}

function mapStateToProps(state: ApplicationState) {
  return {
    documents: state.documents
  };
}

export default connect(mapStateToProps)(Home);
