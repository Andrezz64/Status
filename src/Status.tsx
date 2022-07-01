interface propsType {
    status: boolean,
    service: string,
}

export function Status (props: propsType) {
    return(
        <div className="mb-4">
        <ul>
            <h1>{props.service}</h1> <p>{props.status? "online": "offline"}</p>
        </ul>
        </div>
    )
}