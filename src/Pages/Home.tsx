import React, { Component } from "react";
import '../Components/ComponentStyle.css'
import sec from '../assets/sec.png'
import sec2 from '../assets/sec2.png'
import sec3 from '../assets/sec3.png'
import sec4 from '../assets/sec4.png'
import media1 from '../assets/media1.png'
import media2 from '../assets/media2.png'
import media3 from '../assets/media3.png'
import media4 from '../assets/media4.png'
import media5 from '../assets/media5.png'
import media6 from '../assets/media6.png'
import media7 from '../assets/media7.png'
import media8 from '../assets/media8.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import BottomData from "../Components/BottomData";
import Header from "../Components/Header";
interface Props {
    history: any;
}
interface State {
}
export default class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        }

    }
    renderHeader = () => {
        return (
            <div style={{ }}>
                <Header history={this.props.history} />
            </div>
        )
    }
    renderFirstSection = () => {
        const transform = `rotate(${-30}deg)`;
        return (
            <div className='row'>
                <div className='column'>
                    <div className='sec1-column1'>
                        <h1 style={{ transform }} className='sliding-text' >its our</h1>
                        <h2 style={{ transform, }} className='sliding-text2' >little secret</h2>
                        <p className='sliding-text3'>{'Book a consultation' + ' --->'}</p>

                    </div>

                </div>
                <div className='sec1-column2'>
                    <img style={{ objectFit: 'fill' }} src={sec} />
                </div>
            </div>
        )
    }
    renderSecondSection = () => {
        const data = 'At Prive, we combine the most luxurious beauty care with years of experience, allowing you to be the best kind of you.'
        const data2 = 'Start doubling your beauty and feel the true difference.'
        return (
            <div >
                <p className='sliding-text4'>{data}</p>
                <p style={{ color: '#EB3737' }} className='sliding-text4'>{data2}</p>
                <div  onClick={()=> this.props.history.push("/enquirenow",'')}  className='button-container' >Enquire now</div>
            </div>
        )
    }
    renderThirdSection = () => {
        const data = 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt molestie. Maecenas ex ante, ultrices a dolor et, volutpat elementum dui. Phasellus ullamcorper pharetra sapien, vitae dapibus ante ullamcorper vel. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt molestie. Maecenas ex ante, ultrices a dolor et, volutpat elementum dui. Phasellus ullamcorper pharetra sapien, vitae dapibus ante ullamcorper vel. Maecenas ex ante, ultrices a dolor et, volutpat elementum dui. Phasellus ullamcorper pharetra sapien, vitae dapibus ante ullamcorper vel.'
        const transform = `rotate(${-4}deg)`;

        return (
            <div className='sec2'>
                <div className='sec2-column1'>
                    <img style={{ marginLeft: 50, height: 200, borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingBottom: 50 }} src={sec2} />
                </div>
                <div className='sec2-column2'>
                    <div className='aboutus-container' >About us</div>
                    <p className='aboutus-container2'>{data}</p>
                    <div onClick={()=> this.props.history.push("/enquirenow",'')} style={{ maxWidth: 100 }} className='treatmentContainer2' >Enquire now</div>

                </div>
            </div>
        )
    }
    renderFoutthSection = () => {
        const data = 'Look after your face with our luxury injectables. Our clinic offers face and lip fillers to bring out the best in you. '
        const transform = `rotate(${-4}deg)`;
        return (
            <div className='sec3'>
                <div className='secc-columnn'>
                    <div className='aboutus-container3' >Dermal Fillers</div>
                    <p className='aboutus-container2'>{data}</p>
                    <div  onClick={()=> this.props.history.push("/treatments",'')} style={{ maxWidth: 150 }} className='treatmentContainer3' >See treatments</div>
                </div>
                <div className='secc-column2'>
                    <img style={{ height: 200, borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingBottom: 50 }} src={sec3} />
                </div>
            </div>
        )
    }
    renderFifthSection = () => {

        const data = 'We look after your entire body with our list of personal care treatments. From eyebrows to IV therapy, feel your absolute best from Flair.'
        const transform = `rotate(${-4}deg)`;
        return (
            <div className='sec3'>
                <div className='sec2-column1'>
                    <img style={{ marginLeft: 50, height: 200, borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingBottom: 50 }}
                        src={sec4} />
                </div>
                <div className='sec2-column2'>
                    <div className='aboutus-container3' >Personal Care</div>
                    <p className='aboutus-container2'>{data}</p>
                    <div  onClick={()=> this.props.history.push("/treatments",'')} style={{ maxWidth: 150 }} className='treatmentContainer3' >See treatments</div>
                </div>

            </div>
        )
    }

    renderCarousel = () => {
        return (
            <div style={{ flex: 1, margin: 50, }}>
                <div >
                    <Carousel showThumbs={false} infiniteLoop={true} dynamicHeight={false} centerMode={true} autoPlay={true}>
                        <div style={{ backgroundColor: '#F6C6D2', height: 250 }}>
                            <p style={{ paddingTop: 20 }} >-KAREN SMITH</p>
                            <p className='sliding-text5' style={{ fontSize: 30 }}>Highly reccommend Prive for natural and subtle results!  </p>
                        </div>
                        <div style={{ backgroundColor: '#F6C6D2', height: 250 }}>
                            <p style={{ paddingTop: 20 }}>-KAREN SMITH</p>
                            <p className='sliding-text5' style={{ fontSize: 30 }}>Highly reccommend Prive for natural and subtle results! </p>
                        </div>
                        <div style={{ backgroundColor: '#F6C6D2', height: 250 }}>
                            <p style={{ paddingTop: 20 }}>-KAREN SMITH</p>
                            <p style={{ fontSize: 30 }} className='sliding-text5' >Highly reccommend Prive for natural and subtle results! </p>
                        </div>
                    </Carousel>

                </div>

            </div>

        )
    }
    openInstagram = () => {

    }
    renderMediaList = () => {
        return (
            <div>
                <div className='grid'>
                    <a href="https://www.instagram.com/">
                        <img className='item' style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', }}
                            src={media1} /></a>
                    <a href="https://www.instagram.com/">
                        <img className='item' style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', }}
                            src={media2} /></a>
                    <a href="https://www.instagram.com/">
                        <img className='item' style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', }}
                            src={media3} /></a>
                    <a href="https://www.instagram.com/">
                        <img className='item' style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', }}
                            src={media4} /></a>
                </div>
                <div className='grid'>
                    <a href="https://www.instagram.com/">
                        <img className='item' style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', }}
                            src={media5} /></a>
                    <a href="https://www.instagram.com/">
                        <img className='item' style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', }}
                            src={media6} /></a>
                    <a href="https://www.instagram.com/">
                        <img className='item' style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', }}
                            src={media7} /></a>
                    <a href="https://www.instagram.com/">
                        <img className='item' style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', }}
                            src={media8} /></a>
                </div>

            </div>
        )
    }
    renderBottomData = () => {
        return (
            <div style={{ marginTop: 50 }}>
                <BottomData />
            </div>

        )
    }
    render() {
        return (
            <div style={{ overflow: 'auto', flex: 1 }}>
                {this.renderHeader()}
                {this.renderFirstSection()}
                {this.renderSecondSection()}
                {this.renderThirdSection()}
                {this.renderFoutthSection()}
                {this.renderFifthSection()}
                {this.renderCarousel()}
                {this.renderMediaList()}
                {this.renderBottomData()}
            </div>
        );
    }
}
