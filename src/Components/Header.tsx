import { Component } from "react";
import './ComponentStyle.css';

interface Props {
    history: any;
}
interface State {
}
export default class headerText extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        }

    }

    render(){
        return (
            <div className='homeHeader'>
                <label className='headerText'>privé</label>
                <div className='rightSidemenu'>
                    <div className='phoneContainer'>0333 674 7590</div>
                    <div className='consultationContainer' >Book a consultation</div>
                    <div  onClick={()=> this.props.history.push("/treatments",'')} className='treatmentContainer' >See Treatments</div>
                </div>
            </div>
        )
    }
}