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

export function incrementAsync(data) {
    // console.log(data)
    return {
      type: 'INCREMENT_ASYNC',
      extraData: data
    };
  }