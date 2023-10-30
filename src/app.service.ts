import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  usernames: string[];
  constructor() {
    this.usernames = ['노정훈', '권예진']; // 변수를 통해 삽입 삭제 조회를 구현 ..?
  }
  getHello(): string {
    return 'Hello World!';
  }
  //지금은 조회기능 나는 삽입 삭제 만들어와
  //배열 인덱스를 받아서 인덱스 번호에 있는 유저 네임을 가져오기
  getUsernameByIndex(index: number) {
    if (index < 0 || index >= this.usernames.length) {
      //예외처리 (범위처리)
      throw Error('Index out of range');
    }
    return this.usernames[index];
  }
  //삽입
  postUsernameByIndex(newusername: string): void {
    if (newusername) {
      this.usernames.push(newusername);
    }
  }
  //삭제
  deleteUsernameByIndex(deleteusername: string): void {
    if (deleteusername) {
      const deletename = this.usernames.indexOf(deleteusername);
      if (deletename !== -1) {
        this.usernames.splice(deletename, 1);
      }
    }
  }
}
