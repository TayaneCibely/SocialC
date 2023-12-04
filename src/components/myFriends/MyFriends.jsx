import "./myFriends.css"
export default function MyFriends( {user }){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="rightbarFriends">
            <img src={PF+user.profilePicture} alt="" className="rightbarFriendImg" />
            <span className="rightFriendName">{PF+user.username}</span>
        </li>
    )
}