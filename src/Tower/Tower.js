import React, {Component} from 'react';
import TowerImage from '../TowerImage/TowerImage';
import classes from './Tower.module.scss';

export default class Tower extends Component {
    // 1500 лучше вынести в константу (напр fullTankValue) чтобы
    // 1 -  при изменении кода не забыть поменять в разных местах
    // 2 - по имени быдет понтятнее, что это

    getPercent(value) {
        return Math.round(value * 100 / 1500);
    };

    getStatusBarClass(value, minValue, maxValue) {
        return (value >= minValue && value <= maxValue) ? classes.positive : classes.negative;
    };

    getStatusBarHeight(value) {
        return value * 390 / 1500;
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
