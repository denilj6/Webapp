import { Component } from "react";
import './ComponentStyle.css';
import email from '../assets/email.png'
import camera from '../assets/camera.png'
import fb from '../assets/fb.png'

export default class BottomData extends Component {
    render() {
        return (
            <div className='bottom-container'>
                <div className='bottom-item'>
                    <label className='bottom-heading'>Prive</label>
                    <div className='bottom-title-container'>
                        <label style={{ marginTop: 20 }} className='bottom-item-title'>About Us</label>
                        <label className='bottom-item-title'>Price List</label>
                        <label className='bottom-item-title'>Enquire Now</label>
                    </div>


                </div>
                <div className='bottom-item'>
                    <label className='bottom-heading'>Legal</label>
                    <div className='bottom-title-container'>
                        <label style={{ marginTop: 20 }} className='bottom-item-title'>Terms and Conditions</label>
                        <label className='bottom-item-title'>Privacy Policy</label>
                        <label className='bottom-item-title'>Cookie Policy</label>
                    </div>


                </div>
                <div className='bottom-item'>
                    <label className='bottom-heading'>Help</label>
                    <div className='bottom-title-container'>
                        <label style={{ marginTop: 20 }} className='bottom-item-title'>Contact</label>
                    </div>


                </div>
                <div className='bottom-item'>
                    <label className='bottom-heading'>Socials</label>
                    <div >
                        <img style={{ margin: 10, height: 13, width: 13 }} src={email} />
                        <img style={{ margin: 10, height: 13, width: 13 }} src={camera} />
                        <img style={{ margin: 10, height: 15, width: 15 }} src={fb} />

                    </div>

                </div>

                <div className='bottom-item'></div>
            </div>
        )
    }
}