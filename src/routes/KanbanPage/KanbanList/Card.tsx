import React from 'react';
import { useRecoilState } from 'recoil';

import { kanbanListState } from 'states/kanban';
import { Icardtype } from 'types/kanban';
import { getBorderColor } from './utils';

import styles from './card.module.scss';

interface Props {
  item: Icardtype;
}

function Card({ item }: Props) {
  const [list, setList] = useRecoilState(kanbanListState);
  const index = list.findIndex((data) => data === item);
  const boderColor = getBorderColor(item.category);

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

  return (
    <div className={styles.cardWrap} style={{ border: `5px solid ${boderColor}` }}>
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
      />
    </div>
  );
}

export default React.memo(Card);
