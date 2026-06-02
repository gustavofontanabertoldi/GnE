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
    let button = document.getElementById('btn-add-mapa');
    let inputArqv  = document.getElementById("input-arquivo-mapa");
    let active_map = null;
    button.addEventListener('click', () => {
        inputArqv.click();
    })
    inputArqv.addEventListener("change", (e) => {
            const imgElement = new Image();
            let arquivo = e.target.files[0];
            imgElement.src = URL.createObjectURL(arquivo);
            imgElement.onload = () => {
                const mapa = new Konva.Image({
                    image: imgElement, // <-- Passa o elemento HTML que acabou de carregar
                    x: window.innerWidth/4,
                    y: window.innerHeight/4,
                    width: 800,        // Largura inicial do mapa
                    height: 600,       // Altura inicial do mapa
                    draggable: false   // O mapa NÃO deve ser arrastável, quem arrasta é o stage!
                });
                active_map = mapa;
                layer.add(active_map);
                layer.draw();
            }
        })

    let btn_rmv = document.getElementById("btn-rmv-mapa");
    btn_rmv.addEventListener("click", () => {
        if (active_map != null){
            active_map.destroy();
            active_map = null;
            layer.draw()
        }
    })
}   