import React, {Component} from 'react';
class MiComponente extends Component{
render(){
let tradiciones = {
    nombre: 'baile folclorico',
nombre:['jarabe tapatio', 'danzon huasteco'],
pueblo: 'jalisco'
};

return(
<div className="mi-componente">
<h1>{'tradiciones: ' + tradiciones.nombre}</h1>
<h2>{'pueblo: ' + tradiciones.pueblo}</h2>
<ol>
{
 tradiciones.nombre.map((nombre, i)=>{
console.log(nombre);
return (
    <li key={i}>
    {nombre}
    </li>
);
 })   
}
</ol>
<hr/>
</div>
);
}
}
export default MiComponente;