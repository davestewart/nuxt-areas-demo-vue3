export function state () {
  return {
    value: 1,
    todo: null,
  }
}

export async function initState (state) {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
  state.todo = data
  return data
}
