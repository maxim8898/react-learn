import { connect } from 'react-redux';
import { Content } from "../components/Content";


const mapStateToProps = (state) => {
    const data = state.found.all ? state.found.all : [];
    return {
        data: data,
        sort_by: state.showing.sort_by,
    }
};

export default connect(
    mapStateToProps
)(Content);


