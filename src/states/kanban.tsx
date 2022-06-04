import { atom } from 'recoil';
import { Icardtype } from 'types/kanban';

export const kanbanListState = atom<Icardtype[]>({
  key: 'kanbanListState',
  default: [],
});
