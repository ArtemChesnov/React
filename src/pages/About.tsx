import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from 'src/store';
import { toggleProfile } from 'src/store/profile/slice';
interface AboutProps {
  visible: boolean;
  toggle: () => void;
}

export const About: FC<AboutProps> = (props) => {
  return (
    <>
      <h2>About</h2>
      <input type="checkbox" checked={props.visible} readOnly />
      <button onClick={() => props.toggle()}>click</button>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  visible: state.profile.visible,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggle: () => dispatch(toggleProfile()),
});

export const AboutWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
