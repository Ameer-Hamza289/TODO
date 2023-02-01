import styles from "../Style.module.css"
import shortid from "shortid"
const Form=({todo,setTodo,todoList,setTodoList})=>{
    const handleChange=(event)=>{
        setTodo(event.target.value);
        console.log(todo);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setTodoList([...todoList,{name:todo,id:shortid.generate()}])
        console.log(todoList)
        setTodo("");

    }
    return(
        <div className={styles.Form}>
            {/* This is the Form */}
        <form onSubmit={handleSubmit}>
            <input 
                value={todo}
                onChange={handleChange}
                className={styles.Input}
               placeholder="Add Todo Item "
            ></input>
            <button type="submit" className={styles.InputBtn}>ADD</button>
        </form>

        </div>
    );
}
export default Form;