registerPaint('circle-ripple', class {
    static get inputProperties() {
        return [
            '--circle-x', '--circle-y', '--circle-radius', '--circle-color'
        ];
    }
    paint(ctx, geom, props) {
        const x = props.get('--circle-x').toString();
        const y = props.get('--circle-y').toString();
        const radius = props.get('--circle-radius').toString();
        const color = props.get('--circle-color').toString();

        ctx.fillStyle = color;
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
});