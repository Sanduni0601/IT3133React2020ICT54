export default function Profile(props){
    return(
        <>
        <table>
            <tr>
                <td rowSpan={7}>
                    <img src = {request('../assests/img/1.jpg')} alt="profile picture" />
                </td>
                <td>ID {props.student}</td>
                </tr>
                </table>
                </>
    );
}