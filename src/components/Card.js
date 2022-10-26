const date=new Date();
const dateName=date.getDate();
const monthName=date.getMonth();
const year=date.getFullYear();

function Card(props){
//destructing
const{textTitle,textDesc}=props;
  return  <div className='card'>
   <h1 className='cardTitle'>{textTitle}</h1>
  <p className='cardDescription'>{textDesc}</p> 
 <h1 className='cardFooter'>{dateName +" /"+ monthName + " /" + year}</h1>
 </div>
  
  
}
 export default Card;