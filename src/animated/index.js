import React, { Component } from 'react';
import Animated from 'animated/lib/targets/react-dom';

import './index.css';

export default class PhotoPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0)
        };
    }

    handleClick = () => {
        const { anim } = this.state;
        anim.stopAnimation(value => {
            Animated.spring(anim, {
                toValue: Math.round(value) + 1
            }).start();
        });
    }

    render() {
        const { anim } = this.state;

        const rotateDegree = anim.interpolate({
            inputRange: [0, 4],
            outputRange: ['0deg', '360deg']
        });

        return (
            <div className="demo-animated">
                <div>
                    <button onClick={this.handleClick}>向右翻转</button>
                    <Animated.div
                        style={{
                            transform: [{
                                rotate: rotateDegree
                            }]
                        }}
                        className="preivew-wrapper"
                    >
                        <img
                            alt="img"
                            src="http://img4.imgtn.bdimg.com/it/u=1032683424,3204785822&fm=214&gp=0.jpg"
                        />
                    </Animated.div>
                </div>
            </div>
        );
    }
}