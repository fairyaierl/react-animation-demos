import React, { Component } from 'react';
import GSAP from 'react-gsap-enhancer'
import { TimelineMax, Back, Sine } from 'gsap';

class Photo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillEnter(callback) {
        this.addAnimation(this.enterAnim, {callback: callback})
    }

    componentWillLeave(callback) {
        this.addAnimation(this.leaveAnim, {callback: callback})
    }

    enterAnim = (utils) => {
        const { id } = this.props;
        return new TimelineMax()
            .from(utils.target, 1, {
                x: `+=${( 4 - id ) * 60}px`,
                autoAlpha: 0,
                onComplete: utils.options.callback,
            }, id * 0.7);
    }

    leaveAnim = (utils) => {
        const { id } = this.props;
        return new TimelineMax()
            .to(utils.target, 0.5, {
                scale: 0,
                ease: Sine.easeOut,
                onComplete: utils.options.callback,
            }, (4 - id) * 0.7);
    }

    render() {
        const { url } = this.props;
        return (
            <div className="photo">
                <img src={url} />
            </div>
        )
    }
}

export default GSAP()(Photo);