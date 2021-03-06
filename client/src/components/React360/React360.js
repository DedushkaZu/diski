import React, { Component } from "react";
import "./React360.css";

// You can play with this to adjust the sensitivity
// higher values make mouse less sensitive
const pixelsPerDegree = 1;

class React360 extends Component {
  static defaultProps = { dir: 'images/', numImages: 37 };

  state = {
    dragging: false,
    imageIndex: 0,
    dragStartIndex: 0
  };

  componentDidMount = () => {
    document.addEventListener("mousemove", this.handleMouseMove, false);
    document.addEventListener("mouseup", this.handleMouseUp, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousemove", this.handleMouseMove, false);
    document.removeEventListener("mouseup", this.handleMouseUp, false);
  };

  handleMouseDown = e => {
    e.persist();
    this.setState(state => ({
      dragging: true,
      dragStart: e.screenX,
      dragStartIndex: state.imageIndex
    }));
  };

  handleMouseUp = () => {
    this.setState({ dragging: false });
  };

  updateImageIndex = currentPosition => {
    let numImages = this.props.numImages;
    // console.log('--->', numImages);
    const pixelsPerImage = pixelsPerDegree * (360 / numImages);
    const { dragStart, imageIndex, dragStartIndex } = this.state;
    // console.log(this.state);
    // pixels moved
    let dx = (currentPosition - dragStart) / pixelsPerImage;
    let index = Math.floor(dx) % numImages;
    console.log(index);

    if (index < 0) {
      index = numImages + index - 1;
    }
    index = (index + dragStartIndex) % numImages;
    if (index !== imageIndex) {
      this.setState({ imageIndex: index });
    }
  };

  handleMouseMove = e => {
    if (this.state.dragging) {
      this.updateImageIndex(e.screenX);
    }
  };

  preventDragHandler = e => {
    e.preventDefault();
  };

  render = () => {
    const { imageIndex } = this.state;
    return (
      <img
        className="react-360-img"
        alt=""
        src={`/${this.props.dir}/${imageIndex}.jpg`}
        onMouseDown={this.handleMouseDown}
        onDragStart={this.preventDragHandler} 
      />
    );
  };
}

export default React360;
