import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and 3 <b>other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src="/assets/ad.png" alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(user => {
            return <Online key={user.id} user={user} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar;