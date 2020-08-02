import React from 'react';
import Responsive from '../components/common/Responsive';
import WriteContainer from '../containers/write/WriteContainer';
import { RouteComponentProps } from 'react-router-dom';

interface WritePageProps extends RouteComponentProps<{ postId?: string }> {}
const WritePage: React.FC<WritePageProps> = ({ match }) => (
  <Responsive>
    <WriteContainer match={match} />
  </Responsive>
);

export default WritePage;
