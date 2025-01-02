import { useRef, useEffect, useState } from 'react';

interface SquareProps {
    direction?: 'right' | 'left' | 'up' | 'down' | 'diagonal';
    speed?: number;
    borderColor?: string;
    hoverFillColor?: string;
    backgroundColor?: string;
    gradientStartColor?: string;
    gradientEndColor?: string;
    gradientStartOpacity?: number;
    gradientEndOpacity?: number;
    borderWidth?: number;
    squareSize?: number;
}

interface HoveredSquare {
    x: number;
    y: number;
}

const Squares: React.FC<SquareProps> = ({
    direction = 'right',
    speed = 1,
    borderColor = '#999',
    hoverFillColor = '#fff',
    backgroundColor = '#000',
    gradientStartColor = '#000',
    gradientEndColor = '#000',
    gradientStartOpacity = 0,
    gradientEndOpacity = 1,
    borderWidth = 1,
    squareSize = 50,
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const requestRef = useRef<number | null>(null);
    const numSquaresX = useRef<number>(10);
    const numSquaresY = useRef<number>(10);
    const gridOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const [hoveredSquare, setHoveredSquare] = useState<HoveredSquare | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Early return if canvas is null
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
            numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const drawGrid = () => {
            if (!ctx) return; // Early return if ctx is null
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Set background color
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Set line width for borders
            ctx.lineWidth = borderWidth;

            for (let x = 0; x < numSquaresX.current; x++) {
                for (let y = 0; y < numSquaresY.current; y++) {
                    const squareX = (x * squareSize) + (gridOffset.current.x % squareSize);
                    const squareY = (y * squareSize) + (gridOffset.current.y % squareSize);

                    if (hoveredSquare && hoveredSquare.x === x && hoveredSquare.y === y) {
                        ctx.fillStyle = hoverFillColor;
                        ctx.fillRect(squareX, squareY, squareSize, squareSize);
                    }

                    ctx.strokeStyle = borderColor;
                    ctx.strokeRect(squareX, squareY, squareSize, squareSize);
                }
            }

            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
            );

            gradient.addColorStop(0, `rgba(${hexToRgb(gradientStartColor)}, ${gradientStartOpacity})`);
            gradient.addColorStop(1, `rgba(${hexToRgb(gradientEndColor)}, ${gradientEndOpacity})`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        // Helper function to convert hex to rgb
        const hexToRgb = (hex: string): string => {
            // Remove the hash if present
            hex = hex.replace('#', '');

            // Handle both short and long hex
            const r = parseInt(hex.length === 3 ? hex[0] + hex[0] : hex.slice(0, 2), 16);
            const g = parseInt(hex.length === 3 ? hex[1] + hex[1] : hex.slice(2, 4), 16);
            const b = parseInt(hex.length === 3 ? hex[2] + hex[2] : hex.slice(4, 6), 16);

            return `${r}, ${g}, ${b}`;
        };

        const updateAnimation = () => {
            switch (direction) {
                case 'right':
                    gridOffset.current.x -= speed;
                    break;
                case 'left':
                    gridOffset.current.x += speed;
                    break;
                case 'down':
                    gridOffset.current.y += speed;
                    break;
                case 'up':
                    gridOffset.current.y -= speed;
                    break;
                case 'diagonal':
                    gridOffset.current.x -= speed;
                    gridOffset.current.y -= speed;
                    break;
                default:
                    break;
            }

            if (Math.abs(gridOffset.current.x) > squareSize) gridOffset.current.x = 0;
            if (Math.abs(gridOffset.current.y) > squareSize) gridOffset.current.y = 0;

            drawGrid();
            requestRef.current = requestAnimationFrame(updateAnimation);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const hoveredSquareX = Math.floor(
                (mouseX - (gridOffset.current.x % squareSize)) / squareSize
            );
            const hoveredSquareY = Math.floor(
                (mouseY - (gridOffset.current.y % squareSize)) / squareSize
            );

            setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY });
        };

        const handleMouseLeave = () => {
            setHoveredSquare(null);
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        requestRef.current = requestAnimationFrame(updateAnimation);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [direction, speed, borderColor, hoverFillColor, backgroundColor, gradientStartColor, gradientEndColor, gradientStartOpacity, gradientEndOpacity, borderWidth, squareSize, hoveredSquare]);

    return <canvas ref={canvasRef} className="w-full h-full border-none block absolute top-0 left-0 z-0"></canvas>;
};

export default Squares;