export class User {
  public id: number;
  public email: string;
  public password: string;
  public profile: Profile;

  constructor () {
    this.profile = new Profile();
  }
}

class Profile {
  first_name: string;
  last_name: string;
}
