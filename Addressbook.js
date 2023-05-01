//UC1
class Contact
{
  firstname ;
  lastname ;
  address;
  city;
  state;
  zip;
  phone;
  email;
  constructor(  firstname ,lastname ,address,city,state, zip,phone,email)
  {
    this.firstname=firstname;
    this.address=address;
    this.lastname=lastname;
    this.city=city;
    this.state=state;
    this.zip=zip;
    this.phone=phone;
    this.email=email;

  }
  tostring()
  {
    return "Firstname = "+this.firstname +" Lasttname = "+this.lastname +" City = "+this.city +" State = "+this.state +" ZipCode = "+this.zip +" Phone Number = "+this.phone + " Email = "+this.email;
  }
}
contact = new Contact("Sanjana","Dhenge","1461","Kop","MH","416012","9359545565","abc@gmail.com");
console.log(contact.tostring());