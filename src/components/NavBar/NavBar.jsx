import './NavBar.css';
import logoImage from '../../assets/images/logo-supplier.png'
import { useTranslation } from 'react-i18next';
import { faSearch, faBars, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function NavBar() {
    const [t, i18n] = useTranslation('global');
    const isArabic = i18n.language === 'ar';
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleClick = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (

        <>
            <nav className={`navbar navbar-expand-lg my-nav ${isArabic ? 'arabic-dir' : ''}`} >
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="#">
                        <img src={logoImage} alt="" />
                    </a>
                    <button
                        className={`navbar-toggler custom-toggler ${isNavOpen ? 'active' : ''}`}
                        type="button"
                        onClick={handleToggleClick}
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* <span className="navbar-toggler-icon"></span> */}
                        {/* <FontAwesomeIcon icon={faBars} /> */}
                        <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                        <ul className={`navbar-nav mb-2 mb-lg-0 ${isArabic ? 'arabic-dir' : ''}`}>      
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{t('navBar.home')}</a>
                            </li>       
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('navBar.suppliers')}
                                </a>
                                <ul className= {`dropdown-menu  ${isArabic ? 'arabic' : ''}`}>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-Estsla7Arade')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-Rf3Msa7ee')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-A3malMydanya')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-7dedTsle7')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-KhrbaT4teb')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-SbakaWsrf')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-ZogagWalmotal')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-Kladeng')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-El3zl')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-TbredWtkeef')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-56o6El7rek')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-landscapeWrayy')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-7mamSba7a')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-Dekorat')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-gibsonBoard')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-DehanatWbla6')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-T2meenBab')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-SlamatMoake3')}</a></li>
                                    <li ><a className="dropdown-item" href="#">{t('navBar.page-Mtb5W7mam')}</a></li>
                                </ul>
                            </li>       
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('navBar.contractors')}
                                </a>
                                <ul className= {`dropdown-menu  ${isArabic ? 'arabic' : ''}`}>
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>       
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('navBar.jobs')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>       
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('navBar.training')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('navBar.engineeringOffices')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('navBar.equipment')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('navBar.auction')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('navBar.AdministrativeServices')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">
                        <div className="input-group ms-2 me-2">
                            <span className="input-group-text bg-transparent border-0">
                                <FontAwesomeIcon icon={faSearch} className="livesearch text-white" />
                            </span>
                            <input className="form-control input-search-nav ps-0 pe-0 bg-transparent border-0 text-white btn-outline-info" type="search" placeholder={t("navBar.search")} aria-label="Search" />
                        </div>                                
                            <button className="btn btn-outline-success" type="submit">{t("navBar.search")}</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}