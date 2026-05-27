import Konva from "konva";

let selected_token = null;

export function token_adm(layer){
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

        layer.add(circle);
        layer.draw();
    })

    const btn_rmv = document.getElementById('btn-remove-token');
    btn_rmv.addEventListener('click', () => {
        if(selected_token){
            selected_token.destroy();
            selected_token = null;
            layer.draw();
        }
    })
}

export function map_adm(layer){
    const button = document.getElementById('btn-add-mapa');
    button.addEventListener('click', () => {
        const imgElement = new Image();
        imgElement.src = './src/assets/maps/Screenshot_1.png';
        imgElement.onload = () => {
            const mapa = new Konva.Image({
                image: imgElement, // <-- Passa o elemento HTML que acabou de carregar
                x: window.innerWidth/2,
                y: window.innerHeight/2,
                width: 800,        // Largura inicial do mapa
                height: 600,       // Altura inicial do mapa
                draggable: false   // O mapa NÃO deve ser arrastável, quem arrasta é o stage!
            });
            layer.add(mapa);
            layer.draw();
        }
    })
}