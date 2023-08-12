import './SplashScreen.css';
import krLogo from '../../res/images/svg/kr-logo.svg';
import loadingCircle from '../../res/images/svg/loading-circle.svg';

export default function SplashScreen() {

    return (
        <div id="splash-screen">

            {/* <VantaDotsBackground /> */}
            <img id='splash-kr-logo' src={krLogo} />
            <img id='splash-loading-circle' src={loadingCircle} />

        </div>
    )
}