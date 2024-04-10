import juliaPasquarellaResume from "../assets/Julia+Pasquarella+Resume+-+2022.pdf";

export default function Resume() {
    return (
        <div>
            <embed 
            src={juliaPasquarellaResume}
            type="application/pdf" 
            style={{width: "100%", height: "100vh"}}
            >
            </embed>
        </div>
    )
}