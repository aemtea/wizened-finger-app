var subscriptions = {};

const io = (url) => {
  return {
    subscriptions: {},
    on: (event, callback) => {
      subscriptions[event] = callback;
    },
    off: (event) => {
      delete subscriptions[event];
    },
    emit: (event, data) => {
      if (subscriptions[event]) {
        subscriptions[event](data);
      }
    }
  }
};

export { io };