import React, {useRef, useCallback} from 'react';
import Webcam from 'react-webcam';
import './WebcamCapture.css';

const WebcamCapture: React.FC = () => {
    // Webcamの参照を型付けする
    const webcamRef = useRef<Webcam>(null);

    // 画像をキャプチャする関数
    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc);
        }
    }, [webcamRef]);

    // カメラの設定
    const videoConstraints = {
        facingMode: "environment"
    };

    return (
        <div className="webcam-container">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={425}
                height={320}
                videoConstraints={videoConstraints}
            />
            <div className="webcam-frame"/>
            <button onClick={capture}>Capture photo</button>
        </div>
    );
};

export default WebcamCapture;
