import { CheckCircle, XCircle, WarningCircle, ClockClockwise } from "phosphor-react"
interface propsType {
    status: Number,
    service: string,

    
}


export function Status (props: propsType) {
    if(props.status == 1){
        
        const color = 'text-green-600'
        const text = "Online"
        return(
             
             <div className="mb-4 text-white">
                <h1>{props.service}</h1> <p className={color}>{text} <CheckCircle size={20} className="inline mb-0.5"/></p>
            </div>
            
        )
    }
    else if (props.status == 2){
        const color = 'text-red-600'
        const text = "Offline"
        return(
            <div className="mb-4 text-theBody ">
                <h1>{props.service}</h1> <p className={color}>{text} <XCircle size={20} className="inline mb-0.5"/></p>
            </div>
        )
    }
    else if (props.status == 3){
        const color = 'text-orange-600'
        const text = "Em verificação"
        return(
            <div className="mb-4 text-white">
                <h1>{props.service}</h1> <p className={color}>{text} <WarningCircle size={20} className="inline mb-0.5"/></p>
            </div>
        )
    }
    else if (props.status == 4){
        const color = 'text-sky-500'
        const text = "Em manutenção"
        return(
            <div className="mb-4 text-white">
                <h1>{props.service}</h1> <p className={color}>{text} <ClockClockwise size={20} className="inline mb-0.5"/></p>
            </div>
        )
    }    
}
