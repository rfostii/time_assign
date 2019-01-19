export const getCurrentLocation = () => new Promise((resolve, reject) => {
    const { geolocation } = navigator;

    if (geolocation) {
        geolocation.getCurrentPosition(resolve, reject);
    } else {
        reject();
    }
});
