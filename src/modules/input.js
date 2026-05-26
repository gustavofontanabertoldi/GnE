import Konva from "konva";

export function add_token(camada){
    const button = document.getElementById('btn-add-token');
    button.addEventListener('click', () => {
        const circle = new Konva.Circle({
            x: 150,
            y: 150,
            radius: 25,
            fill: 'red',
            draggable: true
        })
        camada.add(circle);
        camada.draw();

        console.log("token criado com sucesso")
    })
}