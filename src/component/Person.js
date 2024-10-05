import HelloPerson from "./HelloPerson";

export default function Person() {
    const person = {
        name: 'Nguyễn Thị Hồng Nguyên',
        theme: {
            backgroundColor: 'green',
            color: 'white'
        }
    };
    return <>
        <div style={person.theme}>
            <HelloPerson name={person.name} />
        </div>
        <div> Chúc bạn thành công với React </div>
    </>
}



