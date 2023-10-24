const taskIDDOM = document.querySelector('.task-edit-id')
const taskNameDOM = document.querySelector('.task-edit-name')
const taskCompletedDOM = document.querySelector('.task-edit-completed')
const editFormDOM = document.querySelector('.single-task-form')
const editBtnDOM = document.querySelector('.task-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName

const showTask = async () => {
  try {
    const response = await axios.get(`tasks/${id}`)
    const task = await response.data

    const taskID = await task._id
    const completed = await task.completed
    const name = await task.name

     taskIDDOM.textContent =taskID
    taskNameDOM.value = name
    tempName = name 
    if (completed) {
      taskCompletedDOM.checked = true
    }
  } catch (error) {
    console.log(error)
  }
}

showTask()


editFormDOM.addEventListener('submit', async (e) => {
  editBtnDOM.textContent = 'Loading...'
  e.preventDefault()
  try {
    const taskName = taskNameDOM.value
    const taskCompleted = taskCompletedDOM.checked

   const response = await axios.patch(`tasks/${id}`, {
      name: taskName,
      completed: taskCompleted,
    })

    const task =await response.data

    const taskID =  task._id
    const completed =  task.completed
    const name =  task.name

    taskIDDOM.textContent = taskID
    taskNameDOM.value = name
    tempName = name
    if (completed) {
      taskCompletedDOM.checked = true
    }
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `success, edited task`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    console.error(error)
    taskNameDOM.value = tempName
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `${error}`
  }
  editBtnDOM.textContent = 'Edit'
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 3000)
})
