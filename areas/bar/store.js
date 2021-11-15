export function state () {
  return {
    value: 2,
    todo: null,
  }
}

export async function initState (state) {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/2').then(response => response.json())
  state.todo = data
  return data
}
