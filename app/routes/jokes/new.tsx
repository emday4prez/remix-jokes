export default function NewJoke(){
 return (
  <div>
   <p>add your own funny joke</p>
    <form method="post">
   <div>
    <label>
     Name: <input type='text' name='name'/>
    </label>
   </div>
   <div>
    <label>
     Content: <textarea name='content'/>
    </label>
   </div>
   <div>
    <button type='submit' className="button">
     add
    </button>
   </div>
  </form>
  </div>
 
 )
}