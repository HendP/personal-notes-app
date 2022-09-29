import React from 'react';
import { getNote } from '../utils/local-data';
import { useParams } from 'react-router-dom';
import DetailNote from '../components/DetailNote';
import { useNavigate } from 'react-router-dom';
import { deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';

function DetailPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();

    return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: getNote(props.id),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);
        this.props.navigate('/');
    }

    onArchiveHandler(id) {
        archiveNote(id);
        this.props.navigate('/');
    }

    onUnarchiveHandler(id) {
        unarchiveNote(id);
        this.props.navigate('/');
    }

    render() {
        if (this.state.note === null) {
            return <p>Note is not found!</p>;
        }

        return (
            <React.Fragment>
                <DetailNote
                    {...this.state.note}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                    onUnarchive={this.onUnarchiveHandler}
                />
            </React.Fragment>
        );
    }
}

export default DetailPageWrapper;
