import React from 'react';
import {StaggeredMotion, spring} from 'react-motion';

import './index.css'

const defaultStyles = [{h: 0}, {h: 0}, {h: 0}, {h: 0}, {h: 0}]

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        const { show } = this.state;
        return (
            <div className="demo-reactmotion">
                <button onClick={this.toggle}>toggle</button>
                {
                    show && <StaggeredMotion
                        defaultStyles={defaultStyles}
                        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                            return i === 0
                                ? {h: spring(80)}
                                : {h: spring(prevInterpolatedStyles[i - 1].h)}
                        })}>
                        {interpolatingStyles =>
                            <div className="items">
                            {interpolatingStyles.map((style, i) =>
                                <div className="item" key={i} style={{height: style.h, lineHeight: style.h + 'px'}}>{`选项${i + 1}`}</div>)
                            }
                            </div>
                        }
                    </StaggeredMotion>
                }
            </div>
        );
    };
}