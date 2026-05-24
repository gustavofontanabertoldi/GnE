export function cameraInitializer(palco){
    palco.on('wheel', (e) => {
        e.evt.preventDefault();
        let pastZoom = palco.scaleX();
        let mouse = palco.getPointerPosition();

        const factor = 1.05;
        let newZoom = pastZoom;

        if (e.evt.deltaY < 0){
            newZoom = pastZoom * factor
        }
        else{
            newZoom= pastZoom/factor
        }

        if (newZoom < 0.1) newZoom = 0.1;
        if (newZoom > 5) newZoom = 5;

        const pastX = palco.x();
        const pastY = palco.y();

        const newX = mouse.x - (mouse.x - pastX) * (newZoom / pastZoom);
        const newY = mouse.y - (mouse.y - pastY) * (newZoom / pastZoom);

        palco.scale({
            x: newZoom,
            y: newZoom
        })
        palco.position({
            x: newX,
            y: newY
        })
        palco.batchDraw()
    })
};