
class MarvelService {
    _apiBase = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = "apikey=02e1ec6bd15410210de6f5c93c8cf2c8";
    _baseOffsetHero = 241;
    _transformCharacter = (char) => {

        return {
            id: char.id,
            name: char.name,
            description: char.description.length > 150 ? (`${char.description.slice(0, 150)}...`) : char.description,
            thumbnail: char.thumbnail.path + "." + char.thumbnail.extension ,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }    
    }

    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async (offset = this._baseOffsetHero) =>{
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter)
    }
    getCharacter = async (id) =>{
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

}

export default MarvelService;