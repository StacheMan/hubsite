import React from 'react'

import hexagon from '../../../assets/images/redhexagon.mp4'

import Styled from './BackgroundVideo.styles'

const BackgroundVideo = ({ }) =>
(
    <Styled
        // style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
        autoPlay='autoplay'
        loop='loop'
        muted
        id='video-id'
        className='video' >
        {/*TO DO make it accept multiple media types */}
        <source src={hexagon} type="video/mp4" />
        Your browser does not support the video tag.
    </Styled>
);



export default BackgroundVideo