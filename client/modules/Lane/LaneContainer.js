import { connect } from 'react-redux';
import Lane from './Lane';
import { deleteLaneRequest, updateLaneRequest, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => ({
  	laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
	editLane,
  	updateLane: updateLaneRequest,
  	addNote: createNoteRequest,
  	deleteLane: deleteLaneRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);