/**
 * Partial<Type> 
 */
// 可选值，为后面的Type设置undefind
interface TodoPartial {
  title: string;
  description: string;
}
 
function updateTodo(todo: TodoPartial, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1Partial = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1Partial, {
  description: "throw out trash",
});


type fieldsToUpdate = Partial<Todo>



/**
 * Record<Keys, Type>
 */

 interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris;
 


/**
 * Pick<Type, Keys>
 */

// 从一个类型中，挑选key组成新的类型

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
 
todo;


/**
 * Omit<Type, Keys>
 */
// 从一个类型中，删除一些组成新的类型
interface TodoOmit {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreviewOmit = Omit<TodoOmit, "description">;
 
const todoOmit: TodoPreviewOmit = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
 
todoOmit;
