import { useTranslation } from 'react-i18next'
import './WellcomeBanner.css'
import videoPro from '../../assets/images/wecome-vid.mp4'
import NavBar from '../NavBar/NavBar'
import ChangeWord from '../ChangeWords/ChangeWords';

export default function WellcomeBanner() {
    const [t, i18n] = useTranslation('global');
    const isArabic = i18n.language === 'ar';

    
    return (
        // <div className={`content-container ${isArabic ? 'arabic' : ''}`}>{t("header.message")}</div>
        <>
            
            <div className="welcome-banner">
            <NavBar />
            <video className="video-background" autoPlay loop muted>
                <source src={videoPro} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="container">
                    <div className="welcome-banner-content">
                        <h2 className={`welcome-title ${isArabic ? 'arabic' : ''}`}>{t("welcomeBanner.welcomeTitle")}</h2>
                        <ChangeWord />
                    </div>
                </div>
            </div>
        </>
    )
}
