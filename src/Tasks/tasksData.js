const tasksData = [
  {
    id:1,
    name: "Cook a duck",
    totalTime: 120,
    sessions: [
      {
        timeSpent: 80,
        completed: true
      },
      {
        timeSpent: 40,
        completed: false
      }
    ],
    todos: [
      {
        id: 1,
        text: "Shoot the duck",
        completed: false
      },
      {
        id:2,
        text: "Take the feathers",
        completed: true
      }
    ]
  },

  {
    id:2,
    name: "Have fun",
    totalTime: 45,
    sessions: [
      {
        timeSpent: 15,
        completed: true
      },
      {
        timeSpent: 30,
        completed: false
      }
    ],
    todos: [
      {
        id: 1,
        text: "destroy",
        completed: false
      },
      {
        id:2,
        text: "mars",
        completed: true
      }
    ]
  }
]

export default tasksData
