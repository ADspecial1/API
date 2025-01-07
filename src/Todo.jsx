// import React, { useEffect } from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { fetchTodo } from './redux/todoSlicer'
// const Todo = () => {
//     const dispatch = useDispatch()
//     const data = useSelector(state => state.todo)
//     useEffect(()=>{
//         dispatch(fetchTodo())
//     },[])
//     console.log(data)
//   return (
//     <div>
//         {
//             data.isLoading ? <h1>Loading</h1>:
//             data.data.map(todo =>{
//                 return<p>{todo.title}</p>
//             })
//         }
//     </div>
//   )
// }

// export default Todo
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from './redux/todoSlicer';

const Todo = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.todo);

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    console.log(data);

    return (
        <div className="p-5 h-screen bg-gray-100">
            {data.isLoading ? (
                <h1 className="text-2xl font-bold text-center text-gray-700">Loading...</h1>
            ) : (
                <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-50 border-b border-gray-300 sticky top-0">
                            <tr>
                                <th className="p-3 text-sm font-semibold text-left text-gray-600 border-r border-gray-300 sticky top-0 z-10">ID</th>
                                <th className="p-3 text-sm font-semibold text-left text-gray-600 border-r border-gray-300">Name</th>
                                <th className="p-3 text-sm font-semibold text-left text-gray-600 border-r border-gray-300">Age</th>
                                <th className="p-3 text-sm font-semibold text-left text-gray-600">Is Deleted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map(todo => (
                                <tr
                                    key={todo.id}
                                    className="border-b border-gray-300 hover:bg-gray-100"
                                >
                                    <td className="p-3 text-sm text-gray-800 border-r border-gray-300">{todo.id}</td>
                                    <td className="p-3 text-sm text-gray-800 border-r border-gray-300">{todo.name}</td>
                                    <td className="p-3 text-sm text-gray-800 border-r border-gray-300">{todo.age}</td>
                                    <td className="p-3 text-sm text-gray-800">{todo.is_deleted ? 'Yes' : 'No'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Todo;

