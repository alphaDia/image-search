import styled from "styled-components";

const ProfileImage = styled((props) => (
  <img
    src={props.src}
    alt={props.alt}
    className={props.className}
    width="32"
    height="32"
  />
))`
  border-radius: 50%;
`;

const ProfileName = styled(({ className, name }) => {
  return <div className={className}>{name}</div>;
})`
  font-size: 1.2em;
  font-weight: bold;
  color: #e2e8f0;
  margin-left: 1vw;
  letter-spacing: 2px;
  
`;

const ProfileContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  position: absolute;
  inset: 0;
  height: 100%;
  &:hover {
    background: rgba(0, 0, 0, .4)
  }
  border-radius: 10px;
  align-items: flex-end;
  padding: 2vw;
`;

const Profile = ({ image_src, name }) => (
  <ProfileContainer className="profile">
    <div style={{ display: "flex", alignItems: "center",}}>
      <ProfileImage src={image_src} alt="profile" className="profile-image" />
      <ProfileName name={name} className="profile-name" />
    </div>
  </ProfileContainer>
);

export default Profile;
