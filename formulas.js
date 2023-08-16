const round = (x) => Math.round(1000*x)/1000

const formulas = {
    area: {
        square: {
            params: ['s'],
            f: (s) => round(s**2)
        },
        rectangle: {
            params: ['l', 'b'],
            f: (l, b) => round(l*b)
        },
        triangle: {
            params: ['b', 'h'],
            f: (b, h) => round(b*h/2)
        },
        circle: {
            params: ['r'],
            f: (r) => round(22/7*(r**2))
        }
    },
    volume: {
        cube: {
            params: ['s'],
            f: (s) => round(s**3)
        },
        cuboid: {
            params: ['l', 'b', 'h'],
            f: (l, b, h) => round(l*b*h)
        },
        cylinder: {
            params: ['r', 'h'],
            f: (r, h) => round(h*(22/7*(r**2)))
        },
        sphere: {
            params: ['r'],
            f: (r) => round(4/3*(22/7)*(r**3))
        },
        cone: {
            params: ['r', 'h'],
            f: (r, h) => round((r**2)*h/3*(22/7))
        }
    }
}

export default formulas