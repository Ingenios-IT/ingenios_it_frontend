import react, {useState, useEffect} from "react";
import "../assets/styles/Test.css"

export default function Test (){

    const [number, setNumber] = useState(14);

    useEffect(() => {
        console.log(number)
        document.getElementById('tata').style.fontSize = number+"px";
    },[number]);

    return(
        <div>
            <p>{number}</p>
        </div>
    )
}