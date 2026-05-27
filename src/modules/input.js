import Konva from "konva";

let selected_token = null;

export function token_adm(camada){
    const button = document.getElementById('btn-add-token');
    button.addEventListener('click', () => {
        const circle = new Konva.Circle({
            x: window.innerWidth/2,
            y: window.innerHeight/2,
            radius: 25,
            fill: 'red',
            draggable: true
        })
        circle.on('click', () =>{
            if(selected_token != null){
                selected_token.stroke (null);
            }
            circle.stroke('black').strokeWidth(2);
            selected_token = circle;
        })

        camada.add(circle);
        camada.draw();
    })

    const btn_rmv = document.getElementById('btn-remove-token');
    btn_rmv.addEventListener('click', () => {
        if(selected_token){
            selected_token.destroy();
            selected_token = null;
            camada.draw();
        }
    })
}