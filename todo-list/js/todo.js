// DOM 요소
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const checkAll = document.getElementById('checkAll');
const batchCompleteBtn = document.getElementById('batchCompleteBtn');
const batchDeleteBtn = document.getElementById('batchDeleteBtn');

// 할일 목록 저장 배열
let todos = [];

// 오늘 날짜 가져오기 (YYYY-MM-DD 형식)
function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 할일 추가
function addTodo() {
    const text = todoInput.value.trim();

    if (text === '') {
        alert('할일을 입력해주세요.');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        date: getToday(),
        completed: false
    };

    todos.push(todo);
    renderTodos();
    todoInput.value = '';
    todoInput.focus();
}

// 할일 목록 렌더링
function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach(function(todo) {
        const tr = document.createElement('tr');
        if (todo.completed) {
            tr.classList.add('completed');
        }

        tr.innerHTML = `
            <td class="check-col">
                <input type="checkbox" class="form-check-input item-check" data-id="${todo.id}" ${todo.completed ? 'disabled' : ''}>
            </td>
            <td>${todo.text}</td>
            <td>${todo.date}</td>
            <td>
                <button class="btn btn-sm btn-complete" onclick="completeTodo(${todo.id})" ${todo.completed ? 'disabled' : ''}>완료</button>
            </td>
            <td>
                <button class="btn btn-sm btn-delete" onclick="deleteTodo(${todo.id})">삭제</button>
            </td>
        `;

        todoList.appendChild(tr);
    });

    // 전체 선택 체크박스 상태 업데이트
    updateCheckAllState();
}

// 할일 완료
function completeTodo(id) {
    todos = todos.map(function(todo) {
        if (todo.id === id) {
            todo.completed = true;
        }
        return todo;
    });
    renderTodos();
}

// 할일 삭제
function deleteTodo(id) {
    todos = todos.filter(function(todo) {
        return todo.id !== id;
    });
    renderTodos();
}

// 전체 선택 체크박스 상태 업데이트
function updateCheckAllState() {
    const checkboxes = document.querySelectorAll('.item-check:not(:disabled)');
    const checkedBoxes = document.querySelectorAll('.item-check:checked');

    if (checkboxes.length === 0) {
        checkAll.checked = false;
    } else {
        checkAll.checked = checkboxes.length === checkedBoxes.length;
    }
}

// 전체 선택/해제
checkAll.addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.item-check:not(:disabled)');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = checkAll.checked;
    });
});

// 개별 체크박스 변경 시 전체 선택 상태 업데이트
todoList.addEventListener('change', function(e) {
    if (e.target.classList.contains('item-check')) {
        updateCheckAllState();
    }
});

// 일괄 완료
batchCompleteBtn.addEventListener('click', function() {
    const checkedBoxes = document.querySelectorAll('.item-check:checked');

    if (checkedBoxes.length === 0) {
        alert('완료할 항목을 선택해주세요.');
        return;
    }

    checkedBoxes.forEach(function(checkbox) {
        const id = parseInt(checkbox.dataset.id);
        todos = todos.map(function(todo) {
            if (todo.id === id) {
                todo.completed = true;
            }
            return todo;
        });
    });

    renderTodos();
});

// 일괄 삭제
batchDeleteBtn.addEventListener('click', function() {
    const checkedBoxes = document.querySelectorAll('.item-check:checked');

    if (checkedBoxes.length === 0) {
        alert('삭제할 항목을 선택해주세요.');
        return;
    }

    if (confirm('선택한 항목을 삭제하시겠습니까?')) {
        const idsToDelete = Array.from(checkedBoxes).map(function(checkbox) {
            return parseInt(checkbox.dataset.id);
        });

        todos = todos.filter(function(todo) {
            return !idsToDelete.includes(todo.id);
        });

        renderTodos();
    }
});

// 등록 버튼 클릭 이벤트
addBtn.addEventListener('click', addTodo);

// Enter 키로 등록
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// 초기 렌더링
renderTodos();
