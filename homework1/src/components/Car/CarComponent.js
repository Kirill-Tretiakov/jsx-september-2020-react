import React, {Component} from 'react';
import './Car.css'


class CarComponent extends Component {
    render() {
       let {item, stil} = this.props;
        return (
            <div className={stil}>
                {item.name} - {item.model} - {item.color} - {item.horsePower} - {item.volume}
            </div>
        );
    }
}

export default CarComponent;