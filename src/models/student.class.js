export class Student {
    id = 0;
    fullname = '';
    city = '';
    country = '';
    phone = '';
    email = '';
    tags = [];
    remote = true;
    local = true;
    transfer = false;
    photo = '';
    curriculum = '';

    constructor(id, fullname, city, country, phone, email, tags, remote, local, transfer, photo, curriculum){
        this.id = id;
        this.fullname = fullname;
        this.city = city;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.tags = tags;
        this.remote = remote;
        this.local = local;
        this.transfer = transfer;
        this.photo = photo;
        this.curriculum = curriculum;
    }
}