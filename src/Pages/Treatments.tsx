import { Component } from "react";
import BottomData from "../Components/BottomData";
import Header from "../Components/Header";


interface Props {
    history: any;
}
interface State {
    subjects: any;
    selectedItem: any
}
export default class Treatment extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            subjects: [],
            selectedItem: {}
        }

    }
    componentDidMount() {
        let data = [

            {
                id: 0,
                title: 'Beauty',
                isSelected: true,
                spec: [
                    { name: 'Brow Wax' },
                    { name: 'Brow Thread' },
                    { name: 'Brow Tint' },
                    { name: 'Lash Tint' },
                    { name: 'Brow Shape and Tint' },
                    { name: 'Brow Shape with Brow and Lash Tintx' },
                    { name: 'Lash Lift' },
                    { name: 'Brow Lamination' },
                ]

            },
            {
                id: 1,
                title: 'Nails',
                isSelected: false,
                spec: [
                    { name: 'Gel Color Hands' },
                    { name: 'Gel Color Feets' },
                    { name: 'Gel Removal Hands' },
                    { name: 'Gel Removal Feets' },

                ]

            },
            {
                id: 2,
                title: 'Waxing',
                isSelected: false,
                spec: [
                    { name: 'Facial Waxing' },
                    { name: 'Body Waxing' },
                    { name: 'Intimate Waxing' },
                    { name: 'Male Body and Face Waxing' },
                    { name: 'Facial Threading' },

                ]

            },
            {
                id: 3,
                title: 'Massage',
                isSelected: false,

                spec: [
                    { name: 'Back,Neck and Shoulder' },
                    { name: 'Head,Neck and Shoulder' },
                    { name: 'Full Body Deep Tissue' },
                    { name: 'Back,Neck and Shoulder' },
                    { name: 'Hopi Ear Candle' }
                ]

            },
            {
                id: 4,
                title: 'Anti-Wrinkle Injections',
                isSelected: false,
                spec: [
                    { name: '1 Area' },
                    { name: '2 Areas' },
                    { name: '3 Areas' },
                    { name: 'Brow Lift' },
                    { name: 'Brow Tint' },
                    { name: '*Top up after 2 weeks from appointment' },
                    { name: 'Anti Sweat - Hyperhidrosis' }
                ]

            },
            {
                id: 5,
                title: 'Dermal Fillers',
                isSelected: false,
                spec: [
                    { name: 'Lip Enhancement 0.5ml and 1.1ml' },
                    { name: 'Jaw Enhancement' },
                    { name: 'Cheek Enhancement' },
                    { name: 'Chin' },
                    { name: 'Tear Through Treatment' },
                    { name: 'Nasolabial Folds' },
                ]

            },

            {
                id: 6,
                title: 'Facials',
                isSelected: false,
                spec: [
                    { name: 'Dermaplaning' },
                    { name: 'Dermaroller / Microneedling' },
                    { name: 'Chemical Peel' }
                ]

            },
            {
                id: 7,
                title: 'Profhilo',
                isSelected: false,
                spec: [
                    { name: 'Profhilo' }
                ]

            },
            {
                id: 8,
                title: 'Vitamin Injections',
                isSelected: false,
                spec: [
                    { name: 'Vitamin D Injection' },
                    { name: 'Vitamin B12 Injection' },
                    { name: 'Bioten' }
                ]

            },
            {
                id: 10,
                title: 'Other Treatments',
                isSelected: false,
                spec: [
                    { name: 'Aqualax Fat Loss Injections' },
                    { name: 'Injectable and Facial Packages Available on Consultation' }
                ]

            },
        ]
        this.setState({
            subjects: data,
            selectedItem: data[0]
        })
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
                <label className='treat-head'>Treatments -</label>
                <label>Our full menu of luxurious body care</label>
            </div>
        )
    }
    setSelectedItem = (item: any) => {
        this.state.subjects.forEach((element: any) => {
            if (element.id === item.id) {
                element.isSelected = true;
            } else {
                element.isSelected = false;
            }
        });
        this.setState({
            subjects: this.state.subjects,
            selectedItem: item
        })
    }
    renderSubjects = () => {
        let arr: any = [];
        this.state.subjects.forEach((element: any) => {
            arr.push(
                <div onClick={() => this.setSelectedItem(element)} style={{ fontWeight: !!element.isSelected ? 'bold' : 'normal' }} className='treat-subject-items'>{element.title}</div>

            )
        });
        let arr2: any = [];
        if (!!this.state.selectedItem && !!this.state.selectedItem.spec) {
            this.state.selectedItem.spec.forEach((elem: any) => {
                arr2.push(
                    <div className='sliding-text6'>
                        {elem.name}
                    </div>
                )
            });
        }

        return (
            <div>
                <div className='treat-subject'>
                    {arr}
                </div>
                <div className='inner-component'>
                <div style={{ maxWidth: 100 }} className='sliding-text7' >{!!this.state.selectedItem && this.state.selectedItem.title?this.state.selectedItem.title:''}</div>

                    {arr2}
                    <div onClick={()=> this.props.history.push("/enquirenow",'')} style={{ maxWidth: 100 }} className='treatmentContainer' >Enquire now</div>

                </div>
            </div>

        )
    }
    render() {
        return (
            <div style={{ overflow: 'auto', flex: 1 }}>
                {this.renderHeader()}
                {this.renderTopic()}
                {this.renderSubjects()}
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