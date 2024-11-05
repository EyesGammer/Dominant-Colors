const get_dominant_color = (image, dominant_count = 2) => {
    let blockSize = 5,
        rgb = {r: 0, g: 0, b: 0},
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height, length,
        i = -4,
        count = 0,
        colorMap = {};
    const to_hex = rgb => "#" + [rgb.r, rgb.g, rgb.b].map(x => x.toString(16)).map(x => x.padStart(2, '0')).join('').toUpperCase();
    const bin_color = (value, size) => Math.floor(value / size) * size;
    if (
        image.tagName !== 'IMG' ||
        !context
    ) return to_hex(rgb);
    height = canvas.height = image.naturalHeight || image.offsetHeight || image.height;
    width = canvas.width = image.naturalWidth || image.offsetWidth || image.width;
    context.drawImage(image, 0, 0);
    try {
        data = context.getImageData(0, 0, width, height);
    } catch (e) {
        return to_hex(rgb);
    }
    length = data.data.length;
    while( ( i += blockSize * 4 ) < length ) {
        ++count;
        let temp_rgb = {
            r: bin_color( data.data[ i ], 32 ),
            g: bin_color( data.data[ i + 1 ], 32 ),
            b: bin_color( data.data[ i + 2 ], 32 ),
        };
        let key;
        if(
            (
                temp_rgb.r > 20 ||
                temp_rgb.g > 20 ||
                temp_rgb.b > 20
            ) &&
            (
                temp_rgb.r < 235 ||
                temp_rgb.g < 235 ||
                temp_rgb.b < 235
            ) &&
            (
                key = to_hex( temp_rgb )
            )
        ) {
            if( ! colorMap[ key ] ) colorMap[ key ] = {
                r: temp_rgb.r,
                g: temp_rgb.g,
                b: temp_rgb.b,
                hex: key,
                count: 0
            }
            colorMap[ key ].count++;
        }
    }
    let sortedColors = Object.values( colorMap ).sort( ( a, b ) => b.count - a.count );
    return sortedColors.slice( 0, dominant_count ).map( color => color.hex );
};
