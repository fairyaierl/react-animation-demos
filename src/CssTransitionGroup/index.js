import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './index.css';

let uid = 2;
export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeId: 1,
            tabData: [{
                id: 1,
                panel: '选项1'
            }, {
                id: 2,
                panel: '选项2'
            }]
        };
    }

    addTab = () => {
        const { tabData } = this.state;
        uid++;
        tabData.push({
            id: uid,
            panel: `选项${uid}`
        })
        this.setState({
            tabData,
        })
    }

    deleteTab = (id) => {
        let { tabData } = this.state;
        let index = -1;
        tabData.some((p, i) => {
            if (p.id === id) {
                index = i;
                return true;
            }
            return false;
        });
        if (index > -1) {
            tabData.splice(index, 1);
            this.setState({
                tabData
            });
        }
    }

    render() {
        const { tabData, activeId } = this.state;

        const renderTabs = () => {
            return tabData.map((item, index) => {
                return (<div
                    className={`tab-item${item.id === activeId ? ' tab-item-active' : ''}`}
                    key={`tab${item.id}`}
                >
                    {item.panel}
                    <span className="btns btn-delete" onClick={() => this.deleteTab(item.id)}>✕</span>
                </div>);
            })
        }

        return (
            <div>
                <div className="tabs" >
                    <CSSTransitionGroup
                      transitionName="tabs-wrap"
                      transitionEnterTimeout={500}
                      transitionLeaveTimeout={500}
                    >
                      {renderTabs()}
                    </CSSTransitionGroup>
                    <span className="btns btn-add" onClick={this.addTab}>+</span>
                </div>
                <div className="tab-cont">
                    cont
                </div>
            </div>
        );
    }
}