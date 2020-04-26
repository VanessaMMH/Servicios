import React from 'react';
import '../styles/components/Work.styl';
import worker from '../styles/static/worker.png';

const Nosotros = (props) => (
  <div className="Work" id="work">
   <div className="Work-info">
       <h1>
            ¿Quieres ser un Helper?
       </h1>
       <h1><strong>¡Trabaja con nosotros!</strong></h1>
       <h4>
            En Helpers estamos en búsqueda de profesionales con ganas de crecer y salir adelante. Súmate tú también.
       </h4>
       <button>Postula Aqui</button>


   </div>
   <div className="Work-img">
       <h4>
       "... Desde el comienzo supe que ser parte de la comunidad Helpers era una buena idea. Hasta el día de hoy no me arrepiento. Es una herramienta excelente para ofertar mis servicios."
       </h4>
        <img src={worker} alt=" Trabajador" />
        <p>Carlos Manchego</p>

   </div>
  </div>
);



export default (Nosotros);