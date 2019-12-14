import React, {Component} from 'react';
import classes from './TowerList.module.scss'
import Tower from '../Tower/Tower';

export default class TowerList extends Component {

    state = {
        towers: []
    };

    componentDidMount() {
        try {
            fetch('https://silo-8bbea.firebaseio.com/towers/-Lw4j_5CMgJs976EDfUe.json')
                .then(res => res.json())
                .then(towers => {
                    this.setState({towers})
                });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={classes.towers}>
                {this.state.towers.map(tower =>
                    <Tower
                        key={tower.id}
                        tower={tower}
                    />)}
            </div>
        )
    }
}
