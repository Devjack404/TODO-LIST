const todoForm = document.getElementById('addTask')
const taskInput = document.getElementById('taskInput')
const todoList = document.getElementById('todoList')

todoForm.addEventListener('submit', function(event){
    event.preventDefault();

    addNewTask();//menambah tugas
})

function addNewTask(){
    const taskText = taskInput.value.trim(); //ambil nilai input bersihkan spasi

    if (taskText = ""){
        alert("Tugas Tidak Boleh Kosong ");
        return; //hentikan fungsi kalau kosng
    }
    
    const listItem = createTaskElement(taskText); //buat elemen tugas

    todoList.appendChild(listItem); //tambahkan tugas ke listItem

    taskInput.value = " "; //membersihkan input setelah ditambahkan

    saveTaskToStorage();
}