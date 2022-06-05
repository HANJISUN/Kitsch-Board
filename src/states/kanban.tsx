import { atom } from 'recoil';
import { Icardtype } from 'types/kanban';

export const localStorageEffect =
  (id: any) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(id);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset ? localStorage.removeItem(id) : localStorage.setItem(id, JSON.stringify(newValue));
    });
  };

export const kanbanListState = atom<Icardtype[]>({
  key: 'kanbanListState',
  default: [],
  effects: [localStorageEffect(id)],
});

function id(id: any): import('recoil').AtomEffect<Icardtype[]> {
  throw new Error('Function not implemented.');
}
