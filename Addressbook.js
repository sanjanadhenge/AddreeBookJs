//UC1
class Contact {
    constructor(firstname, lastname, address, city, state, zip, phone, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;

    }
    get firstname() { return this._firstname }
    set firstname(firstname) {
        let Name_Reg = RegExp('^[A-Z]{1}[a-z]{2,}');
        if (Name_Reg.test(firstname))
            this._firstname = firstname;
        
        else throw 'Name is Invalid';
    }
    get lastname() { return this._lastname }
    set lastname(lastname) {
        let Name_Reg = RegExp('^[A-Z]{1}[a-z]{2,}');
        if (Name_Reg.test(lastname))
            this._lastname = lastname;
        else throw 'Name is Invalid';
    }
    get address() { return this._address }
    set address(address) {
        let Add_Reg = RegExp('^[0-9A-za-z]{4,}');
        if (Add_Reg.test(address))
            this._address = address;
        else throw 'Address is Invalid';
    }
    get city() { return this._city }
    set city(city) {
        let City_Reg = RegExp('^[0-9A-za-z]{4,}');
        if (City_Reg.test(city))
            this._city = city;
        else throw 'City is Invalid';
    }
    get state() { return this._state }
    set state(state) {
        let State_Reg = RegExp('^[0-9A-za-z]{4,}');
        if (State_Reg.test(state))
            this._state = state;
        else throw 'State is Invalid';
    }
    get zip() { return this._zip }
    set zip(zip) {
        let Zip_Reg = RegExp('^[0-9]{6,6}');
        if (Zip_Reg.test(zip))
            this._zip = zip;
        else throw 'Zip is Invalid';
    }
    get phone() { return this._phone }
    set phone(phone) {
        let Phone_Reg = RegExp('^[0-9]{10,10}');
        if (Phone_Reg.test(phone))
            this._phone = phone;
        else throw 'Phone is Invalid';
    }
    get email() { return this._email }
    set email(email) {
        let Email_Reg = RegExp('^[0-9a-zA-Z]+[.+-_]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}');
        if (Email_Reg.test(email))
            this._email = email;
        else throw 'email is Invalid';
    }

    tostring() {
        return "Firstname = " + this.firstname + " Lastname = " + this.lastname + " City = " + this.city + " State = " + this.state + " ZipCode = " + this.zip + " Phone Number = " + this.phone + " Email = " + this.email;
    }


}
let contactArray = new Array();
try {
    contact = new Contact("Sanjana", "Dhenge", "1461", "KoLhapur", "Maharashtra", "416012", "9359923789", "abc@gmail.com");
    //console.log(contact.tostring());
    contactArray.push(contact);
    contact = new Contact("Radha", "Patil", "1462", "KoLhapur", "Maharashtra", "416022", "9359915712", "xyz@gmail.com");
    let flag =IsCheckDuplicate(contactArray._firstname);
    if(!flag)
    contactArray.push(contact);
    console.log(contactArray);
    
    //Edit();
   // Delete();
   GetCount();
    function Edit() {
        let EditingName = "Sanjana";
        for (let item of contactArray) {
            if (item._firstname == EditingName) {
                item._firstname = "Rani";
            }
        }
        console.log("After Editing Contact----->");
        console.log(contactArray);
    }
    function Delete() {
        let DeleteName = "Sanjana";
        for (let item of contactArray) {
            if (item._firstname == DeleteName) {
                contactArray.splice(contactArray.indexOf(item), 1);
            }
        }
        console.log("After Deleting Contact----->");
        console.log(contactArray);
    }
    function GetCount()
    {
        const tally = contactArray.reduce((total, next) => {

            total[next] = (total[next] || 0) + 1 ;
          
            return total;
          }, {});
          console.log(tally);
    }
    function IsCheckDuplicate(name)
    {
        let flag = contactArray.some(x=>x._firstname == name);
        return flag;
        //console.log(flag);
    }

}
catch
{
    console.error(e);
}

