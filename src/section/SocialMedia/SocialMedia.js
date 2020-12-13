import React from 'react'
import './SocialMedia.css'
import { Icon, InlineIcon } from '@iconify/react';
import bxlFacebook from '@iconify-icons/bx/bxl-facebook';
import bxlTwitter from '@iconify-icons/bx/bxl-twitter';
import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
import bxlGithub from '@iconify-icons/bx/bxl-github';
import emailOutline from '@iconify-icons/eva/email-outline';

function SocialMedia() {
	return(
    <div id="mediaSection">
        <h1>Zobacz co u nas!</h1>
        <hr />
        <div className="container">
            <ul className="list">
                <li><a href="#" target="_blank"><Icon icon={bxlFacebook} /></a></li>
                <li><a href="#" target="_blank"><Icon icon={bxlTwitter} /></a></li>
                <li><a href="#" target="_blank"><Icon icon={bxlInstagram} /></a></li>
                <li><a href="#" target="_blank"><Icon icon={bxlGithub} /></a></li>
                <li><a href="#" target="_blank"><Icon icon={emailOutline} /></a></li>
            </ul>
        </div>
    </div>
	)
}

export default SocialMedia