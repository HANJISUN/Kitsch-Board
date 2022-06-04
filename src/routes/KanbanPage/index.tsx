import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useRecoilValue } from 'recoil';
import { kanbanListState } from 'states/kanban';
import BackGroundImg from './BackGroundImg';

import { KANBAN_LIST_NAME } from './constants';
import KanbanList from './KanbanList';
import Card from './KanbanList/Card';

import styles from './kanbanPage.module.scss';

const KanbanPage = () => {
  const kanbanList = useRecoilValue(kanbanListState);

  const cardFilterHandler = (cardTitle: string) => {
    return kanbanList.filter((data) => data.category === cardTitle).map((item) => <Card key={item.id} item={item} />);
  };

  return (
    <>
      <header className={styles.header}>
        <span>🍒 Kitsch-Board 🍒</span>
      </header>
      <section className={styles.kanbanListContainer}>
        <DndProvider backend={HTML5Backend}>
          {KANBAN_LIST_NAME.map((item) => (
            <KanbanList key={`kanban-${item.dataKey}`} dataKey={item.dataKey} name={item.name}>
              <div className={styles.cardContainer}>{cardFilterHandler(item.dataKey)}</div>
            </KanbanList>
          ))}
        </DndProvider>
      </section>
      <BackGroundImg />
    </>
  );
};

export default KanbanPage;
