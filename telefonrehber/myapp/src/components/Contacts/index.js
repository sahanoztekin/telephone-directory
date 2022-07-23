import {useState, useEffect } from 'react'
import List from './List';
import Form from './Form';

function  Contacts() {
  
  // gönderilen stateleri burada tutacağız. çok fazla olduğundandan array şeklinde oluşturdukk. 
  // ardından form içerisinde addcontact oluşturup onu form indexinde functoina prop ederek kullanalım.
  const [contacts, setContacts] = useState([])
  // ardından useEffect kullanarak bu contacts'a atama yapıldığında son halini görmeyeye çalışayım.
  useEffect(() => {
    console.log(contacts)
    // ne farkettik? bir array atınca diğer array siliniyor. 
    // o zaman forma bir contacs ekleyip, form tarafına props edip ...form kullanıp önceki değeri koruyalım.

  }, [contacts])
 
  return (
    <div>
    <List contacts={contacts}/> {/*listemele yapacağımız için böyle yapacağız. */}
    <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;