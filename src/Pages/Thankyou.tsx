import { Component } from "react";
import BottomData from "../Components/BottomData";
import Header from "../Components/Header";


interface Props {
    history: any;
}
interface State {
  
}
export default class Thankyou extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
          
        }

    }
    componentDidMount() {
        
    }
    renderHeader = () => {
        return (
            <div style={{}}>
                <Header history={this.props.history} />
            </div>
        )
    }
    renderTopic = () => {
        return (
            <div style={{flex:1,height:'100%'}} className='treatment-topic-container'>
                <label className='treat-head'>Thank You -</label>
                <label>Thank you for submitting your enquiry, one of our team will be in touch with you soon.</label>
            </div>
        )
    }
    
   
    render() {
        return (
            <div style={{ overflow: 'auto', flex: 1 }}>
                {this.renderHeader()}
                {this.renderTopic()}
                <div style={{
                    position:'fixed',
                    bottom: 0,width:'100%'
                }} >
                    <BottomData />
                </div>
            </div>
        )
    }

}