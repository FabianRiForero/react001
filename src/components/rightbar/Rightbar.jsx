import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

const Rightbar = ({profile}) => {
  const HomeRightbar = () => {
    return(
      <>
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
      </>
    );
  }

  const ProfileRightbar = () => {
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rigthbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
            </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile === 'profile' ? <ProfileRightbar /> : profile === 'home' ? <HomeRightbar /> : ''}
      </div>
    </div>
  )
}

export default Rightbar;