import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { Component } from "react";
import BottomData from "../Components/BottomData";
import Header from "../Components/Header";
import email1 from '../assets/email1.png'
import camera1 from '../assets/camera1.png'
import fb1 from '../assets/fb1.png'

interface Props {
    history: any;
}

interface State {
    name: string,
    email: string,
    phoneNumber: string,
    treatment: number,
    time: string,
    date: string,
    enquiry: string
}

export default class EnquireNow extends Component<Props, State> {
    treaments: any = [
        {
            index: 0,
            name: 'Beauty'
        },
        {
            index: 1,
            name: 'Nails'
        },
        {
            index: 2,
            name: 'Waxing'
        },
        {
            index: 3,
            name: 'Massage'
        },
        {
            index: 4,
            name: 'Anti-Wrinkle Injections'
        },
        {
            index: 5,
            name: 'Dermal Fillers'
        },
        {
            index: 6,
            name: 'Facials'
        },
        {
            index: 7,
            name: 'Other Treatments'
        },
    ]
    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            treatment: 0,
            time: '',
            date: '',
            enquiry: ''
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
            <div className='treatment-topic-container'>
                <label className='treat-head'>Enquire Now</label>
            </div>
        )
    }
    handleNameChange = (event: any) => {
        this.setState({ name: event.target.value })
    }
    handleEmailCHange = (event: any) => {
        this.setState({ email: event.target.value })
    }
    handleEnquiryChange = (event: any) => {
        this.setState({ enquiry: event.target.value })
    }
    handleNumberChange = (event: any) => {
        if (parseInt(event.target.value) < 0) {
            this.setState({ phoneNumber: '0' })
        } else {
            this.setState({ phoneNumber: event.target.value })

        }
    }
    onTimeChange = (time: any) => {
        this.setState({
            time: time.target.value
        })
    }
    onDateChange = (date: any) => {
        this.setState({
            date: date.target.value
        })
    }
    handleTreatmentChnage = (event: any) => {
        this.setState({
            treatment: event.target.value
        })
    }
    renderForm = () => {
        let arr: any = [];
        this.treaments.forEach((element: any) => {
            arr.push(
                <MenuItem value={element.index}>{element.name}</MenuItem>
            )
        });
        return (
            <div style={{display: "flex", flexDirection: 'column', alignContent: 'center', textAlign: 'center', alignSelf: 'center' }}>
                <label className='sliding-text8'>Fill in the form below to start your journey to doubling your beauty</label>
                <input style={{ marginTop: 20, alignSelf: 'center', width: 500, alignContent: 'center', height: 30, color: '#000', borderColor: '#383737', borderRightWidth: 0, borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 1 }}
                    placeholder='Full Name' type="text" value={this.state.name} onChange={this.handleNameChange} />
                <input style={{ marginTop: 20, alignSelf: 'center', width: 500, alignContent: 'center', height: 30, color: '#000', borderColor: '#383737', borderRightWidth: 0, borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 1 }}
                    placeholder='Email address' type="email" value={this.state.email} onChange={this.handleEmailCHange} />
                <input style={{ marginTop: 20, alignSelf: 'center', width: 500, alignContent: 'center', height: 30, color: '#000', borderColor: '#383737', borderRightWidth: 0, borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 1 }}
                    placeholder='Phone number' type="number" value={this.state.phoneNumber} onChange={this.handleNumberChange} />
                <FormControl style={{ textAlign: 'left', marginTop: 20, alignSelf: 'center', width: 500, alignContent: 'center', color: '#000', borderColor: '#000', borderRightWidth: 0, borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 1 }}>
                    <InputLabel >Select treatment</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"

                        placeholder='Select treatment'
                        value={this.state.treatment}
                        onChange={this.handleTreatmentChnage}>
                        {arr}
                    </Select>
                </FormControl>
                <TextField
                    style={{ marginTop: 20, alignSelf: 'center', width: 500, alignContent: 'center', color: '#000', borderColor: '#000', borderRightWidth: 0, borderTopWidth: 0, borderLeftWidth: 0, borderBottomWidth: 1 }}
                    id="time-local"
                    label="Preferred Time"
                    type="time"
                    onChange={this.onTimeChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    style={{ marginTop: 20, alignSelf: 'center', width: 500, alignContent: 'center', color: '#000', borderColor: '#000', borderWidth: 1 }}
                    id="time-local"
                    label="Preferred Time"
                    type="date"
                    onChange={this.onDateChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <input style={{ marginTop: 20, alignSelf: 'center', width: 500, alignContent: 'center', height: 150, color: '#000', borderColor: '#383737', borderWidth: 1 }}
                    placeholder='Enquiry' type="text" value={this.state.enquiry} onChange={this.handleEnquiryChange} />
              
                <div  onClick={()=> this.props.history.push("/thankyou",'')} style={{ maxWidth: 100 }} className='button-container' >Submit Now</div>
                <div className='bottom-item'>
                    <div >
                        <img style={{ margin: 10, height: 13, width: 13 }} src={email1} />
                        <img style={{ margin: 10, height: 13, width: 13 }} src={camera1} />
                        <img style={{ margin: 10, height: 15, width: 15 }} src={fb1} />

                    </div>

                </div>
            </div>
        )
    }

    render() {
        return (
            <div style={{ overflow: 'auto', flex: 1 }}>
                {this.renderHeader()}
                {this.renderTopic()}
                {this.renderForm()}
                <div  >
                    <BottomData />
                </div>
            </div>
        )
    }

}