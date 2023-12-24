import React, { useRef, useState, useEffect, useCallback } from "react";
import useVideoPlayer from './VideoPlayer';
import './bertaXmass.css';

const BertaXmass = () => {

    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
    } = useVideoPlayer(videoElement);

    const [src, setSrc] = useState(null);

    const [videoClass, setVideoClass] = useState('closed');
    const [gridClass, setGridClass] = useState ('libreriaOpen')


    const PlayVideo =(useCallback((src) => {
        setSrc(src);
        togglePlay();
    },[togglePlay]))

    useEffect(() => {

        if (!playerState.isPlaying){
            setGridClass('libreriaOpen')
        }
        else if (playerState.progress > 0 && playerState.progress < 100) {
            setVideoClass('open');
            setGridClass('libreriaClosed')

        }
        else if (playerState.progress === 100) {
            setVideoClass('closed');
            setGridClass('libreriaOpen')
            console.log(playerState.progress);

            if(src !== './berta1.mp4'){
                setSrc('./berta1.mp4');
                PlayVideo();
            } 
            
        }
    }, [playerState.progress, playerState.isPlaying, videoClass, gridClass, src, togglePlay, PlayVideo])


    return (
        <div className="container">
        <div className="containerBall">
            <img className="title" src="./TITULO.png" alt="TIT" />
            <video className={videoClass}
                src={src}
                ref={videoElement}
                onTimeUpdate={handleOnTimeUpdate}
            />
            <div className={gridClass}>
                <div className="columnA">
                    <img className="casilla" src="./A1.png" alt="A1" />
                    <img className="casilla" src="./A2.png" alt="A2" />
                    <img className="casilla" src="./A3.png" alt="A3" />
                    <img className="casilla" src="./A4.png" alt="A4" />
                    <img className="casilla" src="./A5.png" alt="A5" />
                    <img className="casilla" src="./A6.png" alt="A6" />
                </div>
                <div className="columnB">
                    <img className="casilla" src="./B1.png" alt="B1" />
                    <img className="casilla" src="./B2.png" alt="B2" />
                    <img className="casillaCursor" src="./B3.png" alt="B3" onClick={() =>{PlayVideo('./B3.mp4')}} />
                    <img className="casillaCursor" src="./B4.png" alt="B4" onClick={() =>{PlayVideo('./B4.mp4')}} />
                    <img className="casilla" src="./B5.png" alt="B5" />
                    <img className="casilla" src="./B6.png" alt="B6" />
                </div>
                <div className="columnC">
                    <img className="casilla" src="./C1.png" alt="C1" />
                    <img className="casillaCursor" src="./C2.png" alt="C2" />
                    <img className="casilla" src="./C3.png" alt="C3" />
                    <img className="casillaCursor" src="./C4.png" alt="C4"onClick={() =>{PlayVideo('./C4.mp4')}} />
                    <img className="casillaCursor" src="./C5.png" alt="C5" onClick={() => {PlayVideo('./C5.mp4')}}/>
                    <img className="casilla" src="./C6.png" alt="C6" />
                </div>
                <div className="columnD">
                    <img className="casilla" src="./D1.png" alt="D1" />
                    <img className="casilla" src="./D2.png" alt="D2" />
                    <img className="casillaCursor" src="./D3.png" alt="D3" onClick={()=>{PlayVideo('./D3.mp4')}}/>
                    <img className="casillaCursor" src="./D4.png" alt="D4" onClick={()=>{PlayVideo('./D4.mp4')}}/>
                    <img className="casillaCursor" src="./D5.png" alt="D5" onClick={()=>{PlayVideo('./D5.mp4')}}/>
                    <img className="casilla" src="./D6.png" alt="D6" />
                </div>
                <div className="columnE">
                    <img className="casilla" src="./E1.png" alt="E1" />
                    <img className="casilla" src="./E2.png" alt="E2" />
                    <img className="casilla" src="./E3.png" alt="E3" />
                    <img className="casilla" src="./E4.png" alt="E4"/>
                    <img className="casillaCursor" src="./E5.png" alt="E5" onClick={()=>{PlayVideo('./E5.mp4')}}  />
                    <img className="casilla" src="./E6.png" alt="E6" />
                </div>
                <div className="columnF">
                    <img className="casilla" src="./F1.png" alt="F1" />
                    <img className="casilla" src="./F2.png" alt="F2" />
                    <img className="casilla" src="./F3.png" alt="F3" />
                    <img className="casilla" src="./F4.png" alt="F4" />
                    <img className="casilla" src="./F5.png" alt="F5" />
                    <img className="casilla" src="./F6.png" alt="F6" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default BertaXmass;
