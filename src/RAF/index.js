import React, { Component } from 'react';

import './index.css';

export default class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 10
        };
    }

    increase = () => {
        const percent = this.state.percent;
        const targetPercent = percent >= 90 ? 100 : percent + 10;
        const speed = (targetPercent - percent) / 400;
        let start = null;
        const animate = timestamp => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const currentProgress = Math.min(parseInt(speed * progress + percent, 10), targetPercent);
            this.setState({
                percent: currentProgress
            });
            if (currentProgress < targetPercent) {
                window.requestAnimationFrame(animate);
            }
        };
        window.requestAnimationFrame(animate);
    }

    decrease = () => {
        const percent = this.state.percent;
        const targetPercent = percent < 10 ? 0 : percent - 10;
        const speed = (percent - targetPercent) / 400;
        let start = null;
        const animate = timestamp => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const currentProgress = Math.max(parseInt(percent - speed * progress, 10), targetPercent);
            this.setState({
                    percent: currentProgress
                });
            if (currentProgress > targetPercent) {
                window.requestAnimationFrame(animate);
            }
        };
        window.requestAnimationFrame(animate);
    }

    render() {
        const { percent } = this.state;

        return (
            <div className="demo-raf">
                <div className="progress">
                    <div className="progress-wrapper" >
                        <div className="progress-inner" style = {{width: `${percent}%`}} ></div>
                    </div>
                    <div className="progress-info" >{percent}%</div>
                </div>
                <div className="btns">
                    <button onClick={this.decrease}>-</button>
                    <button onClick={this.increase}>+</button>
                </div>
            </div>
        );
    }
}