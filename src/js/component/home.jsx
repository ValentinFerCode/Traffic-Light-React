import React, {useState} from "react"; //1. importar el hook useState
import "./styles.css";
//use state = usar estado;

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color1,setColor1]= useState("btn-light");
   	const [color2,setColor2]= useState("btn-light");
   	const [color3,setColor3]= useState("btn-light");
	//funcion para encender el rojo
	function encenderRojo() {

		if(color1 === "btn-danger"){
			setColor1("")
		}
		else (color2 === "btn-warning" || color3 === "btn-success");{
			setColor1("btn-danger");
			setColor2("btn-light");
			setColor3("btn-light");
		}
		
	}
	//funcion para encender el amarillo
	function encenderAmarillo(){

		if(color2 === "btn-warning"){
			setColor2("")
		}
		else (color1 === "btn-danger" || color3 === "btn-success");{
			setColor2("btn-warning");
			setColor1("btn-light");
			setColor3("btn-light");
		}
		
	}
	//funcion para encender el verde
	function encenderVerde() {

		if(color3 === "btn-success"){
			setColor3("")
		}
		else(color2 === "btn-warning" || color1 === "btn-danger");{
			setColor3("btn-success");
			setColor2("btn-light");
			setColor1("btn-light");
		
	}	}


	return (

		<div className="container position: absolut;">
			<div className="justify-content-center align-items-center d-flex flex-column mx-auto bg-dark" style={{width:"7px", height:"200px"}}></div>
			<div style={{ width: 100, height: 300, borderRadius:"10%"}} className="justify-content-center align-items-center d-flex flex-column mx-auto bg-dark ">
				<button style={{ width: 90, height: 90 }} className={"rounded-circle btn "+color1} onClick={encenderRojo}></button>
				<button style={{ width: 90, height: 90 }} className={"rounded-circle btn "+color2} onClick={encenderAmarillo}></button>
				<button style={{ width: 90, height: 90 }} className={"rounded-circle btn "+color3} onClick={encenderVerde}></button>
			</div>
			
		</div>
		
	);

};

export default Home;

// 	//    valor inicial, actualiza el valor inicial
// //    const [nombre,setNombre]= useState("Manzana")
// //    const [seguidores,setSeguidores]= useState(0)
//    const [color1,setColor1]= useState("btn-light");
//    const [color2,setColor2]= useState("btn-light");
//    const [color3,setColor3]= useState("btn-light");
// //    function cambiarNombre() {
// // 	setNombre("Pera")
// //    }

// //    function follow() {
// // 	//             0  + 1 = 1
// // 	setSeguidores(seguidores+1)

// //    }

// //    useState()//===> [variable,function]

// 	//funcionalidades del componente
//     //  let nombre = "Rosinni";
// 	//  variables, constates, funciones