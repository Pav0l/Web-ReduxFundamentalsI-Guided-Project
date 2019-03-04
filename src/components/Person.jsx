import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action Createors - usually stored in separate file
const sliponBananaPeel = () => ({
  type: 'SLIP_ON_BANANA_PEEL',
});

const watchTheNews = () => ({
  type: 'WATCH_THE_NEWS',
});

const winTheLottery = () => ({
  type: 'WIN_THE_LOTTERY',
});


// we will export a connected Person component
// that is wrapped in higher order component called connect
// at the bottom of the file
export /* default */ class Person extends React.Component {
  // state = {
  //   mentalHealth: 100,
  //   physicalHealth: 100,
  // }
/*
  sliponBananaPeel = () => {
    //  REDUX way of "yelling" that this action was dispatched
    this.props.dispatch({ type: 'SLIP_ON_BANANA_PEEL' });

    // this.setState(st => ({
    //   physicalHealth: st.physicalHealth - 10,
    // }));
  }

  watchTheNews = () => {
    this.props.dispatch({ type: 'WATCH_THE_NEWS' });

    // this.setState(st => ({
    //   mentalHealth: st.mentalHealth - 10,
    // }));
  }

  winTheLottery = () => {
    this.props.dispatch({ type: 'WIN_THE_LOTTERY' });

    // this.setState(st => ({
    //   mentalHealth: st.mentalHealth + 20,
    //   physicalHealth: st.physicalHealth + 10,
    // }));
  }
*/
  render() {
    return (
      <div>
        <div>physical health: {this.props.physicalHealth}</div>
        <div>mental health: {this.props.mentalHealth}</div>

        <button onClick={this.props.sliponBananaPeel}>Slip on banana peel</button>
        <button onClick={this.props.watchTheNews}>Watch the news</button>
        <button onClick={this.props.winTheLottery}>Win the Lottery</button>
      </div>
    );
  }
}

// mapDispatchToProps removes the necessity to call dispatch inside the Person
// component and you can add it to your action callers with this function through PROPS
// this makes the Person more reusable and purely visual component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sliponBananaPeel,
    watchTheNews,
    winTheLottery,
  }, dispatch);
}


// in this function you can select which state you want to pass to
// specific component
function mapStateToProps(state) {
  return {
    physicalHealth: state.physicalHealth,
    mentalHealth: state.mentalHealth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);
