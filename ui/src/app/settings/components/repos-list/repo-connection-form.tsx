import * as React from 'react';
import {FormApi} from 'react-form';
import {Spinner} from '../../../shared/components';

require('./repos-list.scss');

interface RepoConnectionFormHeaderProps {
  connecting: boolean;
  credsTemplate: boolean;
  formApi: FormApi;
  showConnectRepo: boolean;
}

const RepoConnectionFormHeader: React.FC<RepoConnectionFormHeaderProps> = ({ connecting, credsTemplate, formApi, showConnectRepo }) => {

  return (
    <div>
        <button
            className='argo-button argo-button--base'
            onClick={() => {
                credsTemplate = false;
                formApi.submitForm(null);
            }}>
            <Spinner show={connecting} style={{marginRight: '5px'}} />
            Connect
        </button>{' '}
        <button
            className='argo-button argo-button--base'
            onClick={() => {
                credsTemplate = true;
                formApi.submitForm(null);
            }}>
            Save as credentials template
        </button>{' '}
        <button onClick={() => (showConnectRepo = false)} className='argo-button argo-button--base-o'>
            Cancel
        </button>
      </div>
  );
};

export default RepoConnectionFormHeader;