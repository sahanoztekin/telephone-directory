import {useState} from 'react'
import "./index.css"

function List({ contacts }) {
const [filterText, setFilterText] = useState("");
// isminide yazsa adını da yazsa numarasınıda yazsa kullanıcıyı göstermesi gerekir. 
// object keys kullandıktan sonra item'i içeri alıyoruz.
// item keyleri nelerdir kullanıcı adı ve numaradır.
// ardından some kullanarak burada herhangi birisi uyuyorsa diyeyerekten komut veriyoruz.
// some içerisinde yine arrow atıp her defasında bize ilgili item gelecek ve onu stringe çevireceğiz  ve hemen artından küçültme yapıcaz. 
// arama yaparken küçük büyük harf problemi yaşamayalım.
// includes dedikten sonra bu filtertext  o value içinde var mı yok mu onu kontrol edeceğiz.
const filtered = contacts.filter((item) => {
   return Object.keys(item).some((key) =>
    item[key]
    .toString()
    .toLowerCase()
    .includes(filterText.toLocaleLowerCase())
   )
})

  return (
    <div> 

      <input placeholder='Filter Contact'
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}/>

      <ul>
        {filtered.map((contact, i) =>
        (<li key={i}>{contact.fullname}</li>))} 
        {/* map ile filtereldik ama bunu dışarıda bir fonksiyon ile filtrelemek daha doğru olacaktır. 
        artık contats'i silip filtered eklersek ekrandada yazacktır*/}
      </ul>
    </div>
  )
}

export default List;