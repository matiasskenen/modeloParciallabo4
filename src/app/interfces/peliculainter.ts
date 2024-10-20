export interface Peliculainter 
{
    id: number;
    nombre: string;
    tipo: 'terror' | 'comedia' | 'amor' | 'otros';
    fechaEstreno: Date;
    cantidadPublico: number;
    foto: string;
    protagonista: string;
}

