const UserInfos = ({ userFromApi }) => {
  return (
    <div>
      <p>
        {userFromApi.firstName}
        {userFromApi.lastName}
      </p>
      <p>{userFromApi.age}</p>
      <p>{userFromApi.email}</p>
      <p>{userFromApi.phone}</p>
      <p>{userFromApi.adress}</p>
      <p>{userFromApi.city}</p>
      <p>{userFromApi.zipCode}</p>
      <p>{userFromApi.country}</p>
      <p>{userFromApi.job}</p>
    </div>
  );
};

export default UserInfos;
