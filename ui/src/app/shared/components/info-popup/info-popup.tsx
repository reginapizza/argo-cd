import {Popup} from 'argo-ui';
import * as React from 'react';
import {RevisionMetadata} from '../../../shared/models';
import {DataLoader} from 'argo-ui';
import {Timestamp} from '../../../shared/components/timestamp';
import {services} from '../../../shared/services';

const Title = ({title, onClose}: {title: JSX.Element; onClose: () => void}) => {
    return (
        <React.Fragment>
            {' '}
            <span>
                {title} <i className='argo-icon-close' onClick={onClose} />
            </span>
        </React.Fragment>
    );
};

export const InfoPopup = ({title, content, onClose}: {title: JSX.Element; content: JSX.Element; onClose: () => void}) => {
    return (
        <Popup title={<Title title={title} onClose={onClose} />}>
            {content}
        </Popup>
    );
};

export const InfoPopupContent = (props: {appName: string; type: string; revision: string}) => {
    if (props.type === 'helm') {
        return <React.Fragment />;
    }
    return (
        <DataLoader input={props} load={input => services.applications.revisionMetadata(input.appName, props.revision)}>
            {(m: RevisionMetadata) => (
                <div className='application-status-panel__item-name'>
                    {m.author && (
                        <React.Fragment>
                            Authored by {m.author} - {m.signatureInfo} <Timestamp date={m.date} />
                            <br />
                        </React.Fragment>
                    )}
                    {m.tags && (
                        <span>
                            Tagged {m.tags.join(', ')}
                            <br />
                        </span>
                    )}
                    {m.message}
                </div>
            )}
        </DataLoader>
    );
};

