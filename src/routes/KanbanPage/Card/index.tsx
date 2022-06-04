import React, { useCallback, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { useRecoilState } from 'recoil';

import { kanbanListState } from 'states/kanban';
import { Idrop, Icardtype } from 'types/kanban';
import { getBorderColor } from '../_shared/utils';

import styles from './card.module.scss';

interface Props {
  item: Icardtype;
}

const Card = ({ item }: Props) => {
  const [list, setList] = useRecoilState(kanbanListState);
  const index = list.findIndex((data) => data === item);
  const boderColor = getBorderColor(item.category);
  const ref = useRef<HTMLTextAreaElement>(null);

  const replaceCard = (list: Icardtype[], index: number, data: Icardtype) => {
    return [...list.slice(0, index), data, ...list.slice(index + 1)];
  };

  const editTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceCard(list, index, {
      ...item,
      title: e.target.value,
    });
    setList(newList);
  };
  const editText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newList = replaceCard(list, index, {
      ...item,
      content: e.target.value,
    });
    setList(newList);
  };

  const deleteItem = () => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  const handleResizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = '70px';
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, []);

  const changeItemCategory = (selectedItem: Icardtype, title: string) => {
    setList((prev) => {
      return prev.map((e) => {
        return {
          ...e,
          category: e.id === selectedItem.id ? title : e.category,
        };
      });
    });
  };

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'card',
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult: Idrop | null = monitor.getDropResult();
      if (dropResult) {
        switch (dropResult.name) {
          case 'To do':
            changeItemCategory(item, 'TODO');
            break;
          case 'In progress':
            changeItemCategory(item, 'INPROGRESS');
            break;
          case 'Done':
            changeItemCategory(item, 'DONE');
            break;
          case 'Notes & Reference':
            changeItemCategory(item, 'NOTE');
            break;
        }
      }
    },
  }));

  return (
    <div
      className={styles.cardWrap}
      ref={dragRef}
      style={{ border: `5px solid ${boderColor}`, opacity: isDragging ? '0.3' : '1' }}
    >
      <div className={styles.cardHeaderWrap}>
        <span
          className={styles.cardTitleBadge}
          style={{
            background: `linear-gradient(#fefefe 50%,${boderColor} 0)`,
          }}
        >
          {item.category}
        </span>
        <button type='button' className={styles.deleteButton} onClick={deleteItem}>
          &times;
        </button>
      </div>
      <input
        className={styles.cardTitle}
        type='text'
        value={item.title}
        placeholder='제목을 입력하세요'
        onChange={editTitle}
      />
      <textarea
        className={styles.cardContent}
        value={item.content}
        placeholder='내용을 입력하세요'
        spellCheck='false'
        onChange={editText}
        onInput={handleResizeHeight}
        ref={ref}
      />
    </div>
  );
};

export default Card;
