angular.module('ToDo', [])
	.controller('TodoController', function () {
		//----------------------------------------------
		//	新規ToDoの追加
		//----------------------------------------------
		//TodoController自身を表すthisをself変数に格納する
		var self = this;
		//初期化
		self.todos = [];
		self.create = function() {
			if (typeof self.newTodo == 'undefined'|| self.newTodo == ''){
				//アラートの表示
				alert('ToDoが入力されていませんよ!')
				document.getElementById("todotext").focus();
			}else{
				//リストへ追加
				self.todos.push({title:self.newTodo,checked:false});
				//newTodoの入力欄をクリアする。
				self.newTodo = '';
			}
		};
		//----------------------------------------------
		//	ToDoの削除
		//----------------------------------------------
		//パターン①
		//self.archive = function () {
		//	var currentTodo = self.todos;
		//	self.todos = [];
		//	angular.forEach(currentTodo, function (todo) {
		//		if(!todo.chekded) {
		//			self.todos.push(todo);
		//		}
		//	});
		//};
		//パターン②
		self.archive = function() {
			for (var i = 0; i < self.todos.length; i++) {
				if (self.todos[i].checked) {
					self.todos.splice(i--, 1);
				}
			}
		};
	});
