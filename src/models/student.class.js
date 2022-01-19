export class Student {
    name = '';
    city = '';
    country = '';
    phoneNumber = '';
    email = '';
    tags = [];
    remote = true;
    local = true;
    transfer = false;

    constructor(name, city, country, phoneNumber, email, tags, remote, local, transfer){
        this.name = name;
        this.city = city;
        this.country = country;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.tags = tags;
        this.remote = remote;
        this.local = local;
        this.transfer = transfer;
    }
}