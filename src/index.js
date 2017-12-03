import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProgressJs from './RAF';
import ProgressCss from './css3';
import Tabs from './CssTransitionGroup';
import Gallery from './hook';
import DropList from './reactMotion';

class App extends Component {
    render() {
        return (
            <div className="app-cont">
                <section>
	        		<h1>demo1: 基于定时器或 RAF 的间隔动画</h1>
                    <ProgressJs />
        		</section>
                <section>
                    <h1>demo2: 基于 css3 的简单动画</h1>
                    <ProgressCss />
                </section>
        		<section>
	        		<h1>demo3: React 官方动画插件 CssTransitionGroup</h1>
                    <Tabs />
        		</section>
        		<section>
	        		<h1>demo4: 结合 hook 实现复杂动画</h1>
                    <Gallery />
        		</section>
                <section>
                    <h1>demo5: react-motion</h1>
                    <DropList />
                </section>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
