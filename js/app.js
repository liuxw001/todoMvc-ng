(function (angular) {
	'use strict';

	/**
	 * 主模块:myTodoMvc
	 * @type {angular.Module}
     */
	let myTodoMvc = angular.module('myTodoMvc', []);
	/**
	 * 注册控制器:mainCtrl
	 */
	myTodoMvc.controller('mainCtrl', ['$scope', function ($scope) {
		//要添加的todo文本框
		$scope.text = '';
		//todo列表
		$scope.todos = [
			{
				id: 1,
				text: '吃饭',
				isCompleted: false
			},
			{
				id: 2,
				text: '睡觉',
				isCompleted: false
			},
			{
				id: 3,
				text: '打豆豆',
				isCompleted: true
			}
		];
		/**
		 * 添加todo
		 */
		$scope.add = function () {
			$scope.todos.push({
				id: getId(),
				text: $scope.text,
				isCompleted: false
			});
			$scope.text = '';
		};
		/**
		 * 删除todo
		 */
		$scope.remove = function (id) {
			for(let i=0;i<$scope.todos.length;i++) {
				if($scope.todos[i].id === id) {
					$scope.todos.splice(i, 1);
					break;
				}
			}
		};
		/**
		 * Clear completed
		 * 清空已完成的
		 */
		$scope.clear = function() {
			var result = [];
			for (var i = 0; i < $scope.todos.length; i++) {
				if (!$scope.todos[i].isCompleted) {
					result.push($scope.todos[i]);
				}
			}
			$scope.todos = result;
		};
		/**
		 * Clear completed
		 * 按钮是否显示
		 */
		$scope.isCompleted = function() {
			// 该函数一定要有返回值
			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].isCompleted) {
					return true;
				}
			}
			return false;
		};
		/**
		 * 编辑并保存
		 */
		$scope.currentId = -1;
		$scope.editing = function (id) {
			$scope.currentId = id;
		};
		$scope.save = function () {
			$scope.currentId = -1;
		};
		/**
		 * 全选
		 */
		let now = true;
		$scope.toggleAll = function () {
			for (var i = 0; i < $scope.todos.length; i++) {
				$scope.todos[i].isCompleted = now;
			}
			now = !now;
		};
		/**
		 * 获取ID,避免ID重复
		 */
		function getId() {
			let id = Math.random();
			for(let i=0;i<$scope.todos.length;i++) {
				if($scope.todos[i].id === id) {
					id = getId();
					break;
				}
			}
			return id;
		}
	}])

})(angular);
