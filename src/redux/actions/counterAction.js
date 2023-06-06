// Increase Counter
export const increment = () => {
    return{
        type: 'INCREMENT',
    }  
}

// Decrease Counter
export const decrement = () => {
    return{
        type: 'DECREMENT',
    }
}

export function incrementAsync() {
    return {
      type: 'INCREMENT_ASYNC'
    };
  }