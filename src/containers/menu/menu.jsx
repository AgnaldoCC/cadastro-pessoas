import React, {Component} from 'react'
import { connect } from 'react-redux'
import incrementa from './menuActions.jsx'
import { bindActionCreators } from 'redux';

class Menu extends Component{

    render(){
        return(
            <div>
                <p>{this.props.cont}</p>
                <button onClick={this.props.incrementa}>+</button>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    cont: state.menu.cont
})

const mapDispatchToProps = dispatch => bindActionCreators( { incrementa }, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
