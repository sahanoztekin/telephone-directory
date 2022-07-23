import {useState, useEffect} from 'react'
import "./index.css"

const intialFormValues = {fullname:"", phone_number:""}

function Form( {addContact , contacts} ) {
    // ekleme yapılacağı için bir useState oluşturalım.
    const [form, setForm] = useState(intialFormValues);
    // bir input içeriği değiştiği anda state ataması için bir fonksiyon.

     useEffect(() => {
        setForm(intialFormValues) 
     }, [contacts]) // yani constacts değiştiyse eğer input içerisini boşalt diyebiliriz.

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    };
    // butona bastığımız anda ne olacak onu belirleyecek
   // belirleyelim.Form
    const onSubmit = (e) => { 
        e.preventDefault(); // bununla girdiğim bilgilerin konsolda kalmasını sağlayabiliriz.
        if (form.fullname === "" || form.phone_number === ""){
            return false;
        }// forma boş değer girilise işlemi çalıştırma demek yani devam etmez.
        //bunlar halolduğuna göre eklenenleri liste aktarmak için list componentine gideliim.
        addContact([...contacts, form])
        
        //setformu bunun içine atarak form temizleme işi yapabiliriz.
        // setForm({fullname: "", phone_number:""}) //böylece set ederek sıfırlayacaktır. güzel bir yöntem ama 10 tane input olunca ne yapacağız?? uğraştırır.
        //oyun yerine yukarıdan bir intialFormValues yaparak tanım yaparız ve onu usestate tanımlayıp burada tanımlarsak sorun çözlür. 
        // setForm(intialFormValues) // bunu içeriden bir etki ile yapmak istemezssekte useeffect kullanıp yapabiliriz daha okunur durur. 
    }

    return (
        // iki tane input yazacağız, name ve phone number adında.
        // placeholder ile içerisinde yazacaklarını uyarı şeklinde verelim.
        // bir tane de add butonu ekleyelim.
        <form  onSubmit={onSubmit}>
            <div>
                <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={onChangeInput}/>
            </div>

            <div>
                <input name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}/>
            </div>

            <div>
                <button>Add</button>
            </div>
        </form>


    )
}

export default Form