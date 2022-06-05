import WrapperRequest from './wrapper.api';

export type FederatedType = { provider: string; accessToken: string };

class UserApi extends WrapperRequest {
  loginUser = (data: { email: string; password: string }) => {
    return this.post('auth/signin', {
      data,
    });
  };

  signUpUser = (data: { email: string; password: string; name: string }) => {
    return this.post('auth/signup/send_code', data);
  };
}

const UserApiProvider = new UserApi();
export default UserApiProvider;
