interface RectangleProps {
    color: string;
}

export default function Rectangle({color}:RectangleProps){
    return <div className={`w-64 h-32 bg-${color}-500`}></div>;
}