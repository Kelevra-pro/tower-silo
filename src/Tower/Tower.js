import React, {Component} from 'react';
import TowerImage from '../TowerImage/TowerImage';
import classes from './Tower.module.scss';

export default class Tower extends Component {

    calcPercent(value) {
        return Math.round(value * 100 / 1500)
    };

    isValueInRange(value, minValue, maxValue) {
        if (value >= minValue && value <= maxValue) {
            return classes.positive;
        } else {
            return classes.negative;
        }
    };

    calcStatusBarHeight(value) {
        return value * 390 / 1500
    };

    render() {
        const {tower} = this.props;

        return (
            <div key={tower.id} className={classes.tower}>
                <p className={classes.title}>{tower.title}</p>
                <p className={classes.percentValue}>{this.calcPercent(tower.value)}%</p>
                <hr
                    className={`${classes.statusBar}
                         ${this.isValueInRange(tower.value, tower.minValue, tower.maxValue)}`}
                />
                <div className={classes.statusBarMainWrap}>
                    <TowerImage
                        width="156"
                        height="618"
                        viewBox="0 0 156 618"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    />
                    <div
                        className={classes.statusBarMain}
                        style={{height: this.calcStatusBarHeight(tower.value)}}
                    />
                </div>
                <p className={classes.titleValue}>Масса карналита</p>
                <p className={classes.value}>{tower.value}</p>
                <hr
                    className={`${classes.statusBar}
                         ${this.isValueInRange(tower.value, tower.minValue, tower.maxValue)}`}
                />
            </div>
        )
    }
}
