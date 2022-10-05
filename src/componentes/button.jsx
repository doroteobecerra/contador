import React from "react";

function Btn ({ texto, btnType, click }){
    return(
        <button className={btnType ? "btn-click" : "btn-reiniciar"} onClick={click}>
            {texto}
        </button>
    );
}

export default Btn