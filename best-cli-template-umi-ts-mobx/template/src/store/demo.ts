import { makeAutoObservable } from 'mobx';

class Demo {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addCount() {
    this.count += 1;
  }
}
const demoStore = new Demo();

export default demoStore;
