export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Hello comment",
      username: "Ritwik",
      userId: "1",
      parentId: null,
      createdAt: "2022-02-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Hi comment",
      username: "Ricky",
      userId: "2",
      parentId: null,
      createdAt: "2022-03-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Hello comment first child",
      username: "Ram",
      userId: "2",
      parentId: "1",
      createdAt: "2022-04-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "hi comment second child",
      username: "tanu",
      userId: "2",
      parentId: "2",
      createdAt: "2022-01-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text,name, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: name,
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
