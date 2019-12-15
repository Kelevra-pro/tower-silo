import React, {Component} from 'react';
import TowerImage from '../TowerImage/TowerImage';
import classes from './Tower.module.scss';

const fullTankValue = 1500;

export default class Tower extends Component {

    getPercent(value) {
        return Math.round(value * 100 / fullTankValue);
    };

    getStatusBarClass(value, minValue, maxValue) {
        return (value >= minValue && value <= maxValue) ? classes.positive : classes.negative;
    };

    getStatusBarHeight(value) {
        const maxPixelHeight = 390;
        return value * maxPixelHeight / fullTankValue;
    };

    render() {
        const {tower} = this.props;

        return (
            <div className={classes.tower}>
                <p className={classes.title}>{tower.title}</p>
                <p className={classes.percentValue}>{this.getPercent(tower.value)}%</p>
                <hr className={`${classes.statusBar} ${this.getStatusBarClass(tower.value, tower.minValue, tower.maxValue)}`}/>
                <div className={classes.statusBarMainWrap}>
                    <TowerImage/>
                    <div
                        className={classes.statusBarMain}
                        style={{height: this.getStatusBarHeight(tower.value)}}
                    />
                </div>
                <p className={classes.titleValue}>Масса карналита</p>
                <p className={classes.value}>{tower.value}</p>
                {/* В условиях задачи, сказано менять цвет линии статуса только под процентами.
                В реальной работе над проектом я бы уточнил, нужно ли менять цвет линии в строчке ниже. */}
                <hr className={`${classes.statusBar} ${classes.positive}`}/>
            </div>
        )
    }
}
