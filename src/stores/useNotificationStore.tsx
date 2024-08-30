import create, { State } from "zustand";
import produce from "immer";
interface NotificationStore extends State {
  notifications: Array<{
    type: string;
    message: string;
    description?: string;
    txid?: number;
  }>;

  set: (x: any) => void;
}
const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  set: (fn) => set(produce(fn)),
}));
// const useNotificationStore = create<NotificationStore>((set, get)) => ({
//   notifications: [],
//   set: (fn) => set(produce(fn)),
// });

export default useNotificationStore;
