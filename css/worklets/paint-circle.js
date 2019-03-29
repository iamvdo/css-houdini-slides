registerPaint('circle', class {
    paint(ctx, geom, properties, args) {
        // Determine the center point and radius.
        const x = geom.width / 2;
        const y = geom.height / 2;

        const radius = Math.min(x, y)

        // Draw the circle
        ctx.fillStyle = 'deeppink';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
});