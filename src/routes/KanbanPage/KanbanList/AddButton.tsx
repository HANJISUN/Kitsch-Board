import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { kanbanListState } from 'states/kanban';

import styles from './addButton.module.scss';

const AddButton = ({ title }: { title: string }) => {
  const [kanbanList, setKanbanList] = useRecoilState(kanbanListState);

  const getId: number = kanbanList.length > 0 ? kanbanList[kanbanList.length - 1].id + 1 : 0;

  const handleAddButtonClick = useCallback(() => {
    setKanbanList((prev) => [
      ...prev,
      {
        id: getId,
        title: '',
        content: '',
        category: title,
        isChecked: false,
      },
    ]);
  }, [getId, setKanbanList, title]);

  return (
    <div className={styles.addBtnWrap}>
      <button type='button' className={styles.cardAddBtn} onClick={handleAddButtonClick}>
        Add task
      </button>
    </div>
  );
};

export default React.memo(AddButton);
