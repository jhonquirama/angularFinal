export class Places {

    constructor(_id = '', name = '', description = '', location = '') {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.location = location;
    }

    _id: String;
    name: String;
    description: String;
    location: String;


}

