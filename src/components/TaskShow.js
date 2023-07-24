function TaskShow({ task, onDelete }) {

    const handleDeleteClick = ( )=> {
        onDelete(task.id);
    }

  console.log(task);
  return (
    <div className="task-show-div">
      <h3 className="task-title">Göreviniz.</h3>
      <p>{task.title}</p>
      <h3 className="task-title">Yapılacaklar.</h3>
      <p>{task.taskDesc}</p>

      <div>
        <button className="sil-but" onClick={handleDeleteClick}>
          Sil
        </button>
        <button className="gun-but">Güncelle</button>
      </div>
    </div>
  );
}

export default TaskShow;
