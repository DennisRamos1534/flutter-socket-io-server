const Band = require("./band");

class Bands {

    constructor() {
        this.bans = [];
    }

    addBand(band = new Band()) {
        this.bans.push(band);
    }

    getBands() {
        return this.bans;
    }

    deleteBand(id = '') {
        this.bans = this.bans.filter(band => band.id !== id);
        return this.bans;
    }

    voteBand(id = '') {
        this.bans = this.bans.map(band => {
            if(band.id === id) {
                band.votes++;
                return band;
            } else {
                return band;

            }
        });
    }
}

module.exports = Bands;