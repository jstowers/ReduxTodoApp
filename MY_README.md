# Redux Todo App

### Tuesday, March 21, 2017

_Goals_
Create a real-world app that:
1.      Persists data
2.      Allows you to access your Todos anywhere

_Components_
1.      TodoApp - maintains entire application state (container)
2.      Search
3.      TodoList
4.      Todo
5.      AddTodo

#### Creating the Root Component
Sec. 9, Lec. 87

1.      In the webpack.config file, we can specify where webpack looks for components by defining the modulesDirectories array in the resolve object:

        ```
        resolve: {
            modulesDirectories: ['actions', components', 'containers', 'reducers']
        },

        ```

2.      Create addTodo action creator

3.      Create reducer      
