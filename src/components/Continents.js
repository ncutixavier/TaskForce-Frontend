import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContinentsAction } from '../redux/actions/getContinentsAction'

export class Continents extends Component {

    componentDidMount() {
        this.props.getContinentsAction()
    }

    render() {
        return (
            <div>
                <h1>Continents</h1>
                {console.log(this.props.getContinents.data)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getContinents: state.getContinents
    }
}

export default connect(mapStateToProps, { getContinentsAction })(Continents)
