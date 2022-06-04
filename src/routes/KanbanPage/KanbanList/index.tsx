import React from 'react';
import AddButton from './AddButton';
import { useDrop } from 'react-dnd';
import { getColor, getBorderColor } from './utils';

import styles from './kanbanList.module.scss';

interface Props {
  dataKey: string;
  name: string;
}

const KanbanList = ({ dataKey, name }: Props) => {
  const color = getColor(dataKey);
  const boderColor = getBorderColor(dataKey);

  const [, drop] = useDrop({
    accept: 'card',
    drop: () => ({ name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div className={styles.kanbanListWrap} ref={drop}>
      <div className={styles.kanbanBox} style={{ background: `${color}`, border: `5px solid ${boderColor}` }}>
        <div className={styles.kanbanTitle}>{name}</div>
        <AddButton title={name} />
      </div>
    </div>
  );
};

export default React.memo(KanbanList);
