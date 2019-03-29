registerPaint('circle-props', class {
    static get inputProperties() { return ['--circle-color']; }
    paint(ctx, geom, properties) {
        // Determine the center point and radius.
        const x = geom.width / 2;
        const y = geom.height / 2;

        const radius = Math.min(x, y)

        // Draw the circle
        ctx.fillStyle = properties.get('--circle-color').toString();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
});