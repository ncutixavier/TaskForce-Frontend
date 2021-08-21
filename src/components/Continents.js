import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContinentsAction } from '../redux/actions/getContinentsAction';
import left from '../assets/img/ic-arrows-left.svg'

export class Continents extends Component {

  constructor(props) {
    super(props);
    this.continents = React.createRef();
  }

  componentDidMount() {
    this.props.getContinentsAction();
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  handleLeftClick = () => {
    console.log(this.continents)
    this.continents.current.scrollBy({
      top: 0,
      left: -500,
      behavior: 'smooth',
    });
  }

  handleRightClick = () => {
    console.log(this.continents)
    this.continents.current.scrollBy({
      top: 0,
      left: 500,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="continents">
        <h1 style={{ textAlign: 'center', lineHeight: 6 }}>Per Continents</h1>
        {console.log(this.props.getContinents.data)}
        <div className='continents-card' ref={this.continents}>
          {this.props.getContinents.loading ? (
            <div style={{textAlign:"center"}}>Loading...</div>
          ) : this.props.getContinents.error.length !== 0 ? (
              <div style={{textAlign:"center"}}>{this.props.getContinents.error.message}</div>
            ) : this.props.getContinents.data ? (
                this.props.getContinents.data.map(item => (
                  <div className='card' key={item.continent}>
                    <div className='left-card'>
                      <div className='card-name'>{item.continent}</div>
                      <div className='card-stats'>
                        <div className='card-stats-total'>{this.numberWithCommas(item.todayCases)}</div>
                        <div className='card-stats-text'>New cases</div>
                      </div>
                      <div className='card-total'>All cases: {this.numberWithCommas(item.cases)}</div>
                    </div>
                    <div className='right-card'>
                      <div className='right-stats'>
                        <div className='stats-today'>{this.numberWithCommas(item.todayDeaths)}</div>
                        <div className='stats-text'>New deaths</div>
                        <div className='stats-total'>Total deaths: {this.numberWithCommas(item.deaths)}</div>
                      </div>
                      <div className='right-stats'>
                        <div className='stats-today'>{this.numberWithCommas(item.todayRecovered)}</div>
                        <div className='stats-text'>New recovered</div>
                        <div className='stats-total'>Total recovered: {this.numberWithCommas(item.recovered)}</div>
                      </div>
                      <div className='right-stats'>
                        <div className='stats-today'>{this.numberWithCommas(456123)}</div>
                        <div className='stats-text'>New vaccinated</div>
                        <div className='stats-total'>Total vaccinated: {this.numberWithCommas(2456123)}</div>
                      </div>
                    </div>
                  </div>
                ))
          ) : (<div style={{ textAlign: "center" }}>Data not found</div>)}
          
        </div>
        <button onClick={this.handleLeftClick} className="btn-left card-btn">
          <img src={left} alt="Left Arrow" />
        </button>
        <button onClick={this.handleRightClick} className="btn-right card-btn">
          <img src={left} alt="Right Arrow" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getContinents: state.getContinents,
  };
};

export default connect(mapStateToProps, { getContinentsAction })(Continents);
