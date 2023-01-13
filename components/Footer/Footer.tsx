import React from 'react'
import Container from '../Container/Container'
import Image from '../Image/Image'

import logo from "../../assets/logo.svg"
import footer_1 from "../../assets/footer_1.png"

import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"

function Footer() {
    return (
        <footer className={ `relative z-50 bg-secondary text-white` }>
            <Container classes={ `h-fit` }>
                <div className={ `w-full h-fit py-12` }>
                    <div className={ `w-full h-fit p-4 flex flex-row items-start justify-between gap-4` }>
                        <div className={ `w-fit h-fit` }>
                            <Image image={ logo.src } containerClasses={ `w-[200px] h-auto mb-4` } imageClasses={ `object-contain` } />
                            <p className={ `w-[30ch] mb-4` }>
                                Spaatz mission is create a <b> billion </b> new software developers by <span> 2022.</span>
                            </p>
                            <div className={ `w-fit h-fit flex flex-row items-center justify-start gap-4` }>
                                <span>
                                    <BsTwitter />
                                </span>
                                <span>
                                    <BsFacebook />
                                </span>
                                <span>
                                    <BsLinkedin />
                                </span>
                                <span>
                                    <BsInstagram />
                                </span>
                            </div>
                        </div>
                        <div className={ `w-fit h-fit p-8 flex flex-row items-start justify-between gap-20 bg-white/40 rounded-md ` }>
                            <ul className={ `w-max flex flex-col items-start justify-start gap-1` }>
                                <b className={ `block mb-2 text-xl` }>Status</b>
                                <li>Download</li>
                                <li>Web App</li>
                                <li>Pricing</li>
                                <li>Server Status</li>
                                <li>Change Log</li>
                            </ul>
                            <ul className={ `w-max flex flex-col items-start justify-start gap-1` }>
                                <b className={ `block mb-2 text-xl` }>Platforms</b>
                                <li>Web</li>
                                <li>Windows</li>
                                <li>Mac</li>
                                <li>iOS</li>
                                <li>Android</li>
                            </ul>
                            <ul className={ `w-max flex flex-col items-start justify-start gap-1` }>
                                <b className={ `block mb-2 text-xl` }>Support</b>
                                <li>Password Util</li>
                                <li>Platinum Members</li>
                                <li>Blog</li>
                                <li>License</li>
                            </ul>
                        </div>
                        <div className={ `w-fit h-fit` }>
                            <Image image={ footer_1.src } containerClasses={ `aspect-[1/0.63] w-full h-auto rounded-md` } imageClasses={ `object-cover` } />
                        </div>
                    </div>
                    <div className={ `w-full h-fit p-4 flex flex-row items-center justify-between border-t-[1px]` }>
                        <span>Spaatz © 2022. All rights reserved by VictorThemes</span>
                        <span>
                            <span> Cookies</span>
                            <span> /</span>
                            <span> Contact</span>
                            <span> /</span>
                            <span> Sales</span>
                            <span> /</span>
                            <span> Security</span>
                            <span> /</span>
                            <span> Terms of Service</span>
                            <span> /</span>
                            <span> Privacy Policy</span>
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer