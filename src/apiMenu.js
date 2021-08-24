const URI = 'http://192.168.56.1/restaurante_api/public';

export default {
    async fetchCoins() {
        try {
                let response = await fetch(URI + '/menu');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}