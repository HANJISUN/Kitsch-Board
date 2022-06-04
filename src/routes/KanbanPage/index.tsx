import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { KANBAN_LIST_NAME } from './constants';
import KanbanList from './KanbanList';

import styles from './kanbanPage.module.scss';

const KanbanPage = () => {
  return (
    <>
      <header className={styles.header}>
        <span>🍒 Kitsch-Board 🍒</span>
      </header>
      <section className={styles.kanbanListContainer}>
        <DndProvider backend={HTML5Backend}>
          {KANBAN_LIST_NAME.map((item) => (
            <KanbanList key={`kanban-${item.dataKey}`} dataKey={item.dataKey} name={item.name} />
          ))}
        </DndProvider>
      </section>
    </>
  );
};

export default KanbanPage;
