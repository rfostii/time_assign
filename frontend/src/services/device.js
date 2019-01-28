export const devices = {
    mobile: 768,
    tablet: 992,
    desktop: 1200
};

export const isMobile = () => 
    window.matchMedia(`only screen and (max-width: ${devices.mobile}px)`).matches;

export const isTablet = () => 
    window.matchMedia(`only screen and (min-width: ${devices.mobile}px) and (max-width: ${devices.tablet}px)`).matches;

export const isDesktop = () =>
    window.matchMedia(`only screen and (min-width: ${devices.tablet}px)`).matches;

export const isDevice = (device) => {
    switch(device) {
        case 'mobile':
            return isMobile();
        case 'tablet':
            return isTablet();
        case 'desktop':
            return isDesktop();
        default:
            return false;
    }
};

export default {
    isMobile,
    isTablet,
    isDesktop,
    isDevice,
};
